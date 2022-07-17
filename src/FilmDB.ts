import { Application } from 'fuix';
import BottomNavigation from './components/BottomNavigation';
import IBottomNavigation from './components/IBottomNavigation';
import ITopBar from './components/ITopBar';
import TopBar from './components/TopBar';
import IFilmDB from './IFilmDB';

export default class FilmDB extends Application implements IFilmDB {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.addComponents([this.topBar, new BottomNavigation()]);
    }

    #topBar: ITopBar = new TopBar();

    public get topBar(): ITopBar {
        return this.#topBar;
    }

    #bottomNavigation: IBottomNavigation = new BottomNavigation();

    public get bottomNavigation(): IBottomNavigation {
        return this.#bottomNavigation;
    }
}
customElements.define('film-db', FilmDB);
