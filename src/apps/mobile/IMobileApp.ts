import { IContainer } from 'fuix';
import IMobileBottomNavigation from './IMobileBottomNavigation';
import IMobileMoviesList from './IMobileMoviesList';
import IMobileTopBar from './IMobileTopBar';

export default interface IMobileApp extends IContainer {
    readonly mobileMoviesList: IMobileMoviesList;
    readonly mobileBottomNavigation: IMobileBottomNavigation;
    readonly mobileTopBar: IMobileTopBar;
}
