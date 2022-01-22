import { IState, Machine, State } from 'enta';
import FilmDB from '../FilmDB';
import { getAnchorFromEventTarget } from '../RouteUtil';

export default class NavigationMachine extends Machine<FilmDB> {
    public constructor(host: FilmDB) {
        super(host);
        this.initial.addTransition('load', this.loadComplete);
        this.initial.addTransition('click', this.clickedState);
        this.initial.addTransition('popstate', this.poppedState);
        window.addEventListener('click', this.send);
        window.addEventListener('popstate', this.send);
        window.addEventListener('load', this.send, { once: true });
    }

    private _clickedState!: IState;
    private get clickedState(): IState {
        if (!this._clickedState) {
            this._clickedState = new State('ClickedState');
            this._clickedState.on = this.onClickedState.bind(this);
            this._clickedState.next = this.initial;
        }
        return this._clickedState;
    }

    private _poppedState!: IState;
    private get poppedState(): IState {
        if (!this._poppedState) {
            this._poppedState = new State('Popped');
            this._poppedState.on = this.onPoppedState.bind(this);
            this._poppedState.next = this.initial;
        }
        return this._poppedState;
    }

    private _loadComplete!: IState;
    private get loadComplete(): IState {
        if (!this._loadComplete) {
            this._loadComplete = new State('LoadComplete');
            this._loadComplete.on = this.onLoadComplete.bind(this);
            this._loadComplete.next = this.initial;
        }
        return this._loadComplete;
    }

    private onClickedState(e: Event) {
        const anchor: HTMLAnchorElement | null = getAnchorFromEventTarget(e.target);
        if (anchor) {
            e.preventDefault();
            if (location.pathname.toLowerCase() !== anchor.pathname) {
                const path = anchor.pathname;
                console.log('anchor pathname', path);
                history.pushState(null, '', path);
                // this.updateDocumentTitle(index);
                this.host.dispatch('URL_CHANGED', location.pathname.toLowerCase(), false);
            }
        }
    }

    private onPoppedState(): void {
        console.log('onPoppedState', location.pathname.toLowerCase());
        // this.updateDocumentTitle(index);
        this.host.dispatch('URL_CHANGED', location.pathname.toLowerCase(), false);
    }

    private onLoadComplete(): void {
        console.log('onLoadComplete', location.pathname.toLowerCase());
        this.host.dispatch('URL_CHANGED', location.pathname.toLowerCase(), false);
    }
}
