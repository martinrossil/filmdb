import { Application } from 'fuix';
import TopBar from './components/TopBar';
import IFilmDB from './IFilmDB';
import Device from './observables/Device';
import Theme from './theme/Theme';

export default class FilmDB extends Application implements IFilmDB {
    public constructor() {
        super();
        this.bodyBackgroundColor = Theme.singleton.colors.neutral.COLOR_900;
        this.bodyFontFamily = 'Inter';
        this.addComponents([new TopBar()]);
        Device.singleton.addEventListener(Device.CHANGED, this.#deviceChanged.bind(this));
        this.#deviceChanged();
    }

    #deviceChanged(): void {
        console.log(Device.singleton);
    }
}
customElements.define('film-db', FilmDB);
