import { ApplicationElement } from 'enta';
import ResponsiveMachine from './machines/ResponsiveMachine';
import Colors from './theme/Colors';
import DesktopApp from './views/desktop/DestopApp';
import LaptopApp from './views/laptop/LaptopApp';
import MobileApp from './views/mobile/MobileApp';
import TabletApp from './views/tablet/TabletApp';

export default class FilmDB extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        document.body.style.backgroundColor = Colors.BLUE_DARKEST.toString();
    }

    private responsiveMachine = new ResponsiveMachine(this);

    public mobile(): void {
        this.removeElements();
        this.addElement(this.mobileApp);
    }

    public tablet(): void {
        this.removeElements();
        this.addElement(this.tabletApp);
    }

    public laptop(): void {
        this.removeElements();
        this.addElement(this.laptopApp);
    }

    public desktop(): void {
        this.removeElements();
        this.addElement(this.desktopApp);
    }

    private _mobileApp!: MobileApp;
    private get mobileApp(): MobileApp {
        if (!this._mobileApp) {
            this._mobileApp = new MobileApp();
        }
        return this._mobileApp;
    }

    private _tabletApp!: TabletApp;
    private get tabletApp(): TabletApp {
        if (!this._tabletApp) {
            this._tabletApp = new TabletApp();
        }
        return this._tabletApp;
    }

    private _laptopApp!: LaptopApp;
    private get laptopApp(): LaptopApp {
        if (!this._laptopApp) {
            this._laptopApp = new LaptopApp();
        }
        return this._laptopApp;
    }

    private _desktopApp!: DesktopApp;
    private get desktopApp(): DesktopApp {
        if (!this._desktopApp) {
            this._desktopApp = new DesktopApp();
        }
        return this._desktopApp;
    }
}
customElements.define('film-db', FilmDB);
