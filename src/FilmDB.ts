import { Application } from 'fuix';

export default class FilmDB extends Application {
    public constructor() {
        super();
        console.log('FilmDB()');
    }
}
customElements.define('film-db', FilmDB);
