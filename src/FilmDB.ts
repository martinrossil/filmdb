import { Application } from 'fuix';
import BottomNavigation from './components/BottomNavigation';
import TopBar from './components/TopBar';

export default class FilmDB extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.addComponents([new TopBar(), new BottomNavigation()]);
    }
}
customElements.define('film-db', FilmDB);
