import { StackContainer } from 'fuix';
import DesktopApp from './desktop/DesktopApp';
import IAppsContainer from './IAppsContainer';
import IDesktopApp from './desktop/IDesktopApp';
import ILaptopApp from './laptop/ILaptopApp';
import IMobileApp from './mobile/IMobileApp';
import ITabletLandscapeApp from './tablet/ITabletLandscapeApp';
import ITabletPortraitApp from './tablet/ITabletPortraitApp';
import LaptopApp from './laptop/LaptopApp';
import MobileApp from './mobile/MobileApp';
import TabletLandscapeApp from './tablet/TabletLandscapeApp';
import TabletPortraitApp from './tablet/TabletPortraitApp';
import IDevice from '../observables/IDevice';
import Device from '../observables/Device';

export default class AppsContainer extends StackContainer implements IAppsContainer {
    #device: IDevice = Device.singleton;

    public constructor() {
        super();
        this.display = 'block';
        this.#device.addEventListener(Device.CHANGED, this.#deviceChanged.bind(this));
        this.#deviceChanged();
        this.addComponents(
            [
                this.mobileApp,
                /* this.tabletPortraitApp,
                this.tabletLandscapeApp,
                this.laptopApp,
                this.desktopApp, */
            ],
        );
        this.selectedIndex = 0;
    }

    #deviceChanged(): void {
        console.log(this.#device.device, this.#device.orientation);
    }

    #mobileApp!: IMobileApp;

    public get mobileApp(): IMobileApp {
        if (!this.#mobileApp) {
            this.#mobileApp = new MobileApp();
            this.#mobileApp.position = 'absolute';
            this.#mobileApp.left = 0;
            this.#mobileApp.top = 0;
            this.#mobileApp.right = 0;
            this.#mobileApp.bottom = 0;
        }
        return this.#mobileApp;
    }

    #tabletPortraitApp!: ITabletPortraitApp;

    public get tabletPortraitApp(): ITabletPortraitApp {
        if (!this.#tabletPortraitApp) {
            this.#tabletPortraitApp = new TabletPortraitApp();
        }
        return this.#tabletPortraitApp;
    }

    #tabletLandscapeApp!: ITabletLandscapeApp;

    public get tabletLandscapeApp(): ITabletLandscapeApp {
        if (!this.#tabletLandscapeApp) {
            this.#tabletLandscapeApp = new TabletLandscapeApp();
        }
        return this.#tabletLandscapeApp;
    }

    #laptopApp!: ILaptopApp;

    public get laptopApp(): ILaptopApp {
        if (!this.#laptopApp) {
            this.#laptopApp = new LaptopApp();
        }
        return this.#laptopApp;
    }

    #desktopApp!: IDesktopApp;

    public get desktopApp(): IDesktopApp {
        if (!this.#desktopApp) {
            this.#desktopApp = new DesktopApp();
        }
        return this.#desktopApp;
    }
}
customElements.define('apps-container', AppsContainer);
