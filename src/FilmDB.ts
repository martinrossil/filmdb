import { Application } from 'fuix';
import TopBar from './components/TopBar';
import IFilmDB from './IFilmDB';
import Theme from './theme/Theme';

export default class FilmDB extends Application implements IFilmDB {
    public constructor() {
        super();
        this.bodyBackgroundColor = Theme.singleton.colors.neutral.COLOR_900;
        this.bodyFontFamily = 'Inter';
        this.addComponents([new TopBar()]);
    }
}
customElements.define('film-db', FilmDB);
