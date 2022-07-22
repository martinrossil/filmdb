import { IContainer } from 'fuix';
import IDesktopApp from './desktop/IDesktopApp';
import ILaptopApp from './laptop/ILaptopApp';
import IMobileApp from './mobile/IMobileApp';
import ITabletLandscapeApp from './tablet/ITabletLandscapeApp';
import ITabletPortraitApp from './tablet/ITabletPortraitApp';

export default interface IAppsContainer extends IContainer {
    readonly mobileApp: IMobileApp;
    readonly tabletPortraitApp: ITabletPortraitApp;
    readonly tabletLandscapeApp: ITabletLandscapeApp;
    readonly laptopApp: ILaptopApp;
    readonly desktopApp: IDesktopApp;
}
