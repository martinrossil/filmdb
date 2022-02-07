import DesktopApp from './desktop/DestopApp';
import LaptopApp from './laptop/LaptopApp';
import MobileApp from './mobile/MobileApp';
import TabletApp from './tablet/TabletApp';

export default class Factory {
    private static _mobileApp: MobileApp;
    public static get mobileApp(): MobileApp {
        if (!this._mobileApp) {
            this._mobileApp = new MobileApp();
        }
        return this._mobileApp;
    }

    private static _tabletApp: TabletApp;
    public static get tabletApp(): TabletApp {
        if (!this._tabletApp) {
            this._tabletApp = new TabletApp();
        }
        return this._tabletApp;
    }

    private static _laptopApp: LaptopApp;
    public static get laptopApp(): LaptopApp {
        if (!this._laptopApp) {
            this._laptopApp = new LaptopApp();
        }
        return this._laptopApp;
    }

    private static _desktopApp: DesktopApp;
    public static get desktopApp(): DesktopApp {
        if (!this._desktopApp) {
            this._desktopApp = new DesktopApp();
        }
        return this._desktopApp;
    }
}
