import { Application, IComponent } from 'fuix';
import DesktopApp from './apps/desktop/DesktopApp';
import LaptopApp from './apps/laptop/LaptopApp';
import MobileApp from './apps/mobile/MobileApp';
import TabletLandscapeApp from './apps/tablet/TabletLandscapeApp';
import TabletPortraitApp from './apps/tablet/TabletPortraitApp';
import TopBar from './components/TopBar';
import Device from './observables/Device';
import IDevice from './observables/IDevice';
import IColors from './theme/IColors';
import Theme from './theme/Theme';

export default class FilmDB extends Application {
    public constructor() {
        super();
        this.display = 'block';
        this.bodyFontFamily = 'Inter';
        this.bodyBackgroundColor = this.colors.neutral.COLOR_100;
        this.addComponents([new TopBar()]);
        // this.device.addEventListener(Device.CHANGED, this.deviceChanged.bind(this));
        // this.deviceChanged();
    }

    private deviceChanged(): void {
        this.removeAllComponents();
        this.addComponent(this.getAppFromDeviceProperties());
    }

    private getAppFromDeviceProperties(): IComponent {
        const { name, orientation } = this.device;
        if (name === 'mobile') {
            return this.mobileApp;
        }
        if (name === 'tablet') {
            if (orientation === 'portrait') {
                return this.tabletPortraitApp;
            }
            return this.tabletLandscapeApp;
        }
        if (name === 'laptop') {
            return this.laptopApp;
        }
        return this.desktopApp;
    }

    private colors: IColors = Theme.singleton.colors;

    private device: IDevice = Device.singleton;

    private _mobileApp!: MobileApp;

    public get mobileApp(): MobileApp {
        if (!this._mobileApp) {
            this._mobileApp = new MobileApp();
            this._mobileApp.position = 'absolute';
            this._mobileApp.inset = '0';
        }
        return this._mobileApp;
    }

    private _tabletPortraitApp!: TabletPortraitApp;

    public get tabletPortraitApp(): TabletPortraitApp {
        if (!this._tabletPortraitApp) {
            this._tabletPortraitApp = new TabletPortraitApp();
            this._tabletPortraitApp.position = 'absolute';
            this._tabletPortraitApp.inset = '0';
        }
        return this._tabletPortraitApp;
    }

    private _tabletLandscapeApp!: TabletLandscapeApp;

    public get tabletLandscapeApp(): TabletLandscapeApp {
        if (!this._tabletLandscapeApp) {
            this._tabletLandscapeApp = new TabletLandscapeApp();
            this._tabletLandscapeApp.position = 'absolute';
            this._tabletLandscapeApp.inset = '0';
        }
        return this._tabletLandscapeApp;
    }

    private _laptopApp!: LaptopApp;

    public get laptopApp(): LaptopApp {
        if (!this._laptopApp) {
            this._laptopApp = new LaptopApp();
            this._laptopApp.position = 'absolute';
            this._laptopApp.inset = '0';
        }
        return this._laptopApp;
    }

    _desktopApp!: DesktopApp;

    public get desktopApp(): DesktopApp {
        if (!this._desktopApp) {
            this._desktopApp = new DesktopApp();
            this._desktopApp.position = 'absolute';
            this._desktopApp.inset = '0';
        }
        return this._desktopApp;
    }
}
customElements.define('film-db', FilmDB);
