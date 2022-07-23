import { Application, IComponent } from 'fuix';
import DesktopApp from './apps/desktop/DesktopApp';
import LaptopApp from './apps/laptop/LaptopApp';
import MobileApp from './apps/mobile/MobileApp';
import TabletLandscapeApp from './apps/tablet/TabletLandscapeApp';
import TabletPortraitApp from './apps/tablet/TabletPortraitApp';
import Device from './observables/Device';
import IDevice from './observables/IDevice';
import IColors from './theme/IColors';
import Theme from './theme/Theme';

export default class FilmDB extends Application {
    public constructor() {
        super();
        this.display = 'block';
        this.bodyFontFamily = 'Inter';
        this.bodyBackgroundColor = this.#colors.neutral.COLOR_900;
        this.#device.addEventListener(Device.CHANGED, this.#deviceChanged.bind(this));
        this.#deviceChanged();
    }

    #deviceChanged(): void {
        this.removeAllComponents();
        this.addComponent(this.#getAppFromDeviceProperties());
    }

    #getAppFromDeviceProperties(): IComponent {
        const { name, orientation } = this.#device;
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

    #colors: IColors = Theme.singleton.colors;

    #device: IDevice = Device.singleton;

    #mobileApp!: MobileApp;

    public get mobileApp(): MobileApp {
        if (!this.#mobileApp) {
            this.#mobileApp = new MobileApp();
            this.#mobileApp.position = 'absolute';
            this.#mobileApp.inset = '0';
        }
        return this.#mobileApp;
    }

    #tabletPortraitApp!: TabletPortraitApp;

    public get tabletPortraitApp(): TabletPortraitApp {
        if (!this.#tabletPortraitApp) {
            this.#tabletPortraitApp = new TabletPortraitApp();
            this.#tabletPortraitApp.position = 'absolute';
            this.#tabletPortraitApp.inset = '0';
        }
        return this.#tabletPortraitApp;
    }

    #tabletLandscapeApp!: TabletLandscapeApp;

    public get tabletLandscapeApp(): TabletLandscapeApp {
        if (!this.#tabletLandscapeApp) {
            this.#tabletLandscapeApp = new TabletLandscapeApp();
            this.#tabletLandscapeApp.position = 'absolute';
            this.#tabletLandscapeApp.inset = '0';
        }
        return this.#tabletLandscapeApp;
    }

    #laptopApp!: LaptopApp;

    public get laptopApp(): LaptopApp {
        if (!this.#laptopApp) {
            this.#laptopApp = new LaptopApp();
            this.#laptopApp.position = 'absolute';
            this.#laptopApp.inset = '0';
        }
        return this.#laptopApp;
    }

    #desktopApp!: DesktopApp;

    public get desktopApp(): DesktopApp {
        if (!this.#desktopApp) {
            this.#desktopApp = new DesktopApp();
            this.#desktopApp.position = 'absolute';
            this.#desktopApp.inset = '0';
        }
        return this.#desktopApp;
    }
}
customElements.define('film-db', FilmDB);
