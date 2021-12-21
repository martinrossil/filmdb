import { Application, Display } from 'fuix';

export default class FilmDB extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        this.display = Display.BLOCK;
        this.style.height = '100vh';
        console.log('FilmDBApp');
    }
}
customElements.define('film-db', FilmDB);
