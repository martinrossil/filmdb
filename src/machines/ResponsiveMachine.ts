import { IState, Machine, State } from 'enta';
import FilmDB from '../FilmDB';
import Model from '../state/Model';

export default class ResponsiveMachine extends Machine<FilmDB> {
    public constructor(host: FilmDB) {
        super(host);
        this.initial.addTransition('load', this.loadComplete);
        window.addEventListener('load', this.send, { once: true });
        window.addEventListener('resize', () => {
            this.send(new CustomEvent(this.getEventTypeFromWidth()));
        });
    }

    private _loadComplete!: IState;
    private get loadComplete(): IState {
        if (!this._loadComplete) {
            this._loadComplete = new State('LoadComplete');
            this._loadComplete.addTransition('mobile', this.mobile);
            this._loadComplete.addTransition('tablet', this.tablet);
            this._loadComplete.addTransition('laptop', this.laptop);
            this._loadComplete.addTransition('desktop', this.desktop);
            this._loadComplete.on = this.onLoadComplete.bind(this);
        }
        return this._loadComplete;
    }

    private _mobile!: IState;
    private get mobile(): IState {
        if (!this._mobile) {
            this._mobile = new State('Mobile');
            this._mobile.addTransition('tablet', this.tablet);
            this._mobile.addTransition('laptop', this.laptop);
            this._mobile.addTransition('desktop', this.desktop);
            this._mobile.on = () => { Model.device.value = 'Mobile'; };
        }
        return this._mobile;
    }

    private _tablet!: IState;
    private get tablet(): IState {
        if (!this._tablet) {
            this._tablet = new State('Tablet');
            this._tablet.addTransition('mobile', this.mobile);
            this._tablet.addTransition('laptop', this.laptop);
            this._tablet.addTransition('desktop', this.desktop);
            this._tablet.on = () => { Model.device.value = 'Tablet'; };
        }
        return this._tablet;
    }

    private _laptop!: IState;
    private get laptop(): IState {
        if (!this._laptop) {
            this._laptop = new State('Laptop');
            this._laptop.addTransition('mobile', this.mobile);
            this._laptop.addTransition('tablet', this.tablet);
            this._laptop.addTransition('desktop', this.desktop);
            this._laptop.on = () => { Model.device.value = 'Laptop'; };
        }
        return this._laptop;
    }

    private _desktop!: IState;
    private get desktop(): IState {
        if (!this._desktop) {
            this._desktop = new State('Desktop');
            this._desktop.addTransition('mobile', this.mobile);
            this._desktop.addTransition('tablet', this.tablet);
            this._desktop.addTransition('laptop', this.laptop);
            this._desktop.on = () => { Model.device.value = 'Desktop' };
        }
        return this._desktop;
    }

    private onLoadComplete(): void {
        this.send(new CustomEvent(this.getEventTypeFromWidth()));
    }

    private getEventTypeFromWidth(): string {
        const width = Math.max(window.innerWidth, document.documentElement.clientWidth);
        if (width > 1366) {
            return 'desktop';
        }
        if (width > 1024) {
            return 'laptop';
        }
        if (width >= 768) {
            return 'tablet';
        }
        return 'mobile';
    }
}
