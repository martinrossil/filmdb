import { Container } from 'fuix';
import IMobileApp from './IMobileApp';
import IMobileBottomNavigation from './IMobileBottomNavigation';
import IMobileMoviesList from './IMobileMoviesList';
import IMobileTopBar from './IMobileTopBar';
import MobileBottomNavigation from './MobileBottomNavigation';
import MobileMoviesList from './MobileMoviesList';
import MobileTopBar from './MobileTopBar';

export default class MobileApp extends Container implements IMobileApp {
    public constructor() {
        super();
        this.addComponents(
            [
                this.mobileMoviesList,
                this.mobileBottomNavigation,
                this.mobileTopBar,
            ],
        );
    }

    #mobileMoviesList!: IMobileMoviesList;

    public get mobileMoviesList(): IMobileMoviesList {
        if (!this.#mobileMoviesList) {
            this.#mobileMoviesList = new MobileMoviesList();
        }
        return this.#mobileMoviesList;
    }

    #mobileBottomNavigation!: IMobileBottomNavigation;

    public get mobileBottomNavigation(): IMobileBottomNavigation {
        if (!this.#mobileBottomNavigation) {
            this.#mobileBottomNavigation = new MobileBottomNavigation();
            this.#mobileBottomNavigation.position = 'fixed';
            this.#mobileBottomNavigation.height = 56;
            this.#mobileBottomNavigation.left = 0;
            this.#mobileBottomNavigation.right = 0;
            this.#mobileBottomNavigation.bottom = 0;
        }
        return this.#mobileBottomNavigation;
    }

    #mobileTopBar!: IMobileTopBar;

    public get mobileTopBar(): IMobileTopBar {
        if (!this.#mobileTopBar) {
            this.#mobileTopBar = new MobileTopBar();
            this.#mobileTopBar.position = 'fixed';
            this.#mobileTopBar.height = 56;
            this.#mobileTopBar.top = 0;
            this.#mobileTopBar.left = 0;
            this.#mobileTopBar.right = 0;
        }
        return this.#mobileTopBar;
    }
}
customElements.define('mobile-app', MobileApp);
