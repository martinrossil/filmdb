import { Application } from 'fuix';
import IFilmDB from './IFilmDB';

export default class FilmDB extends Application implements IFilmDB {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.bodyFontFamily = 'Inter';
    }
}
customElements.define('film-db', FilmDB);
