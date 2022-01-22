import { IEventListener, IState, Machine, State } from 'enta';
import FilmDB from '../FilmDB';
import Model from '../state/Model';
import IMoviesPage from '../dto/IMoviesPage';
import { moviesPageJSONToMoviesPage } from '../dto/JSONAdapter';

export default class APIMachine extends Machine<FilmDB> {
    public constructor(host: FilmDB) {
        super(host);
        this.initial.addTransition('URL_CHANGED', this.loadingPageState);
        host.addEventListener('URL_CHANGED', this.send);
    }

    private _loadingPageState!: IState;
    private get loadingPageState(): IState {
        if (!this._loadingPageState) {
            this._loadingPageState = new State('LoadingPageState');
            this._loadingPageState.on = this.onLoadingPageState.bind(this) as unknown as IEventListener;
            this._loadingPageState.next = this.initial;
        }
        return this._loadingPageState;
    }

    private async onLoadingPageState(e: CustomEvent<string>): Promise<void> {
        Model.movies.removeAll();
        console.log('detail', e.detail);
        if (e.detail.startsWith('/film/')) {
            await this.getMovie(e.detail);
        } else {
            await this.getMoviesPage(e.detail);
        }
    }

    private async getMovie(uid: string): Promise<void> {
        console.log('getMovie', uid);
    }

    private async getMoviesPage(path: string): Promise<void> {
        try {
            // const response = await fetch('https://filmdb.pages.dev/api' + e.detail);
            const response = await fetch('https://filmdb.pages.dev/api' + path);
            const moviesPageSJON: IMoviesPage = await response.json();
            const moviesPage: IMoviesPage = moviesPageJSONToMoviesPage(moviesPageSJON);
            Model.movies.addItems(moviesPage.movies);
        } catch (error) {
            console.log(error);
        }
    }
}
