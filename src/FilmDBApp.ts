import { Application } from 'fuix';

export default class FilmDBApp extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        console.log('FilmDBApp');
    }
}
customElements.define('filmdb-app', FilmDBApp);
