import { IState, Machine, State } from 'enta';
import FilmDB from '../FilmDB';

export default class FilmDBMachine extends Machine<FilmDB> {
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
        }
        return this._loadComplete;
    }

    private onLoadComplete(): void {
        console.log('onLoadComplete', 'updateModel', location.pathname.toLowerCase());
    }
}
