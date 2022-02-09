import { IEventListener, IState, Machine, State } from 'enta';
import FilmDB from '../FilmDB';

export default class LinkMachine extends Machine<FilmDB> {
    public constructor(host: FilmDB) {
        super(host);
        this.initial.addTransition('URL_CHANGED', this.urlChanged);
        this.host.addEventListener('URL_CHANGED', this.send);
    }

    private _urlChanged!: IState;
    private get urlChanged(): IState {
        if (!this._urlChanged) {
            this._urlChanged = new State('UrlChnaged');
            this._urlChanged.on = this.onUrlChanged as IEventListener;
            this._urlChanged.next = this.initial;
        }
        return this._urlChanged;
    }

    private onUrlChanged(e: CustomEvent<string>): void {
        console.log(e.type, e.detail);
        const url = e.detail;
        if (url !== '/' && !url.startsWith('/film/')) {
            console.log('filter changed');
            this.updateSelectedFilters();
            this.updateLinkHrefs();
        }
    }

    private updateSelectedFilters(): void {
        console.log('updateSelectedFilters()');
    }

    private updateLinkHrefs(): void {
        console.log('updateLinkHrefs()');
    }
}
