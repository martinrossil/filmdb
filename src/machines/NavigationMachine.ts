import { IState, Machine, State } from 'enta';
import FilmDB from '../FilmDB';

export default class NavigationMachine extends Machine<FilmDB> {
    public constructor(host: FilmDB) {
        super(host);
        this.initial.addTransition('load', this.loadComplete);
        window.addEventListener('load', this.send, { once: true });
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

    private onLoadComplete(): void {
        console.log('onLoadComplete');
        this.host.dispatch('URL_CHANGED', location.pathname, false);
    }
}
