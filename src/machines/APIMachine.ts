import { IEventListener, IState, Machine, State } from 'enta';
import FilmDB from '../FilmDB';
import { MovieDiscoverPageSchema } from '../schema/MovieDiscoverPageSchema';
import Model from '../state/Model';

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
            this._loadingPageState.on = this.onLoadingPageState.bind(this) as IEventListener;
            this._loadingPageState.next = this.initial;
        }
        return this._loadingPageState;
    }

    private async onLoadingPageState(): Promise<void> {
        console.log('onLoadingPageState pathname', location.pathname);
        Model.movies.removeAll();
        try {
            const response = await fetch('/api/discover');
            const page: MovieDiscoverPageSchema = await response.json();
            console.log('page', page);
            // Because the closure compiler renames variable names, we need to use ['name'] syntax,
            // so page.movies is kept in the ADVANCED compiler mode.
            Model.movies.addItems(page.results);
        } catch (error) {
            console.log(error);
        }
    }
}
