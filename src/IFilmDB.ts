import { IApplication } from 'fuix';
import IBottomNavigation from './components/IBottomNavigation';
import ITopBar from './components/ITopBar';

export default interface IFilmDB extends IApplication {
    readonly topBar: ITopBar;
    readonly bottomNavigation: IBottomNavigation;
}
