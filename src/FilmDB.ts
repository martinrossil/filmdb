import { Application } from 'fuix';
import AppsContainer from './apps/AppsContainer';
import IAppsContainer from './apps/IAppsContainer';
import IFilmDB from './IFilmDB';
import Theme from './theme/Theme';

export default class FilmDB extends Application implements IFilmDB {
    public constructor() {
        super();
        this.bodyBackgroundColor = Theme.singleton.colors.neutral.COLOR_900;
        this.bodyFontFamily = 'Inter';
        this.addComponent(this.appsContainer);
    }

    #appsContainer!: IAppsContainer;

    public get appsContainer(): IAppsContainer {
        if (!this.#appsContainer) {
            this.#appsContainer = new AppsContainer();
        }
        return this.#appsContainer;
    }
}
customElements.define('film-db', FilmDB);
