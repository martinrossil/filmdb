import { Application } from 'fuix';

export default class FilmDB extends Application {
    public constructor() {
        super();
    }
}
customElements.define('film-db', FilmDB);
