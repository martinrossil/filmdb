import { Container, DataContainer, IContainer } from 'fuix';
import Model from '../../observables/Model';
import IColors from '../../theme/IColors';
import Theme from '../../theme/Theme';
import IMoviePreview from '../../domain/IMoviePreview';
import MovieRenderer from '../mobile/MovieRenderer';

export default class TabletPortraitApp extends Container {
    public constructor() {
        super();
        this.addComponents([this.moviesList, this.navigation, this.topBar]);
    }

    #colors: IColors = Theme.singleton.colors;

    #moviesList!: DataContainer<IMoviePreview>;

    private get moviesList(): DataContainer<IMoviePreview> {
        if (!this.#moviesList) {
            this.#moviesList = new DataContainer();
            this.#moviesList.display = 'grid';
            this.#moviesList.style['gap'] = '16px';
            this.#moviesList.padding = 16;
            this.#moviesList.style.paddingTop = '168px';
            this.#moviesList.style.paddingBottom = '16px';
            this.#moviesList.style['gridTemplateColumns'] = 'repeat(auto-fill, minmax(150px, 1fr))';
            this.#moviesList.DataRendererClass = MovieRenderer;
            this.#moviesList.dataProvider = Model.singleton.movies;
        }
        return this.#moviesList;
    }

    #navigation!: IContainer;

    private get navigation(): IContainer {
        if (!this.#navigation) {
            this.#navigation = new Container();
            this.#navigation.backgroundColor = this.#colors.primary.COLOR_700;
            this.#navigation.position = 'fixed';
            this.#navigation.height = 80;
            this.#navigation.left = 0;
            this.#navigation.right = 0;
            this.#navigation.top = 72;
        }
        return this.#navigation;
    }

    #topBar!: IContainer;

    public get topBar(): IContainer {
        if (!this.#topBar) {
            this.#topBar = new Container();
            this.#topBar.backgroundColor = this.#colors.primary.COLOR_900;
            this.#topBar.position = 'fixed';
            this.#topBar.height = 72;
            this.#topBar.top = 0;
            this.#topBar.left = 0;
            this.#topBar.right = 0;
        }
        return this.#topBar;
    }
}
customElements.define('tablet-portrait-app', TabletPortraitApp);
