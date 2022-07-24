import { Container, DataContainer, IContainer } from 'fuix';
import Model from '../../observables/Model';
import IColors from '../../theme/IColors';
import Theme from '../../theme/Theme';
import IMoviePreview from '../../domain/IMoviePreview';
import MovieRenderer from '../mobile/MovieRenderer';

export default class LaptopApp extends Container {
    public constructor() {
        super();
        this.addComponents([this.moviesList, this.navigation, this.topBar]);
    }

    private colors: IColors = Theme.singleton.colors;

    private _moviesList!: DataContainer<IMoviePreview>;

    private get moviesList(): DataContainer<IMoviePreview> {
        if (!this._moviesList) {
            this._moviesList = new DataContainer();
            this._moviesList.display = 'grid';
            this._moviesList.gap = 16;
            this._moviesList.padding = 16;
            this._moviesList.style.paddingTop = '144px';
            this._moviesList.style.paddingBottom = '16px';
            this._moviesList.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
            this._moviesList.DataRendererClass = MovieRenderer;
            this._moviesList.dataProvider = Model.singleton.movies;
        }
        return this._moviesList;
    }

    private _navigation!: IContainer;

    private get navigation(): IContainer {
        if (!this._navigation) {
            this._navigation = new Container();
            this._navigation.backgroundColor = this.colors.primary.COLOR_700;
            this._navigation.position = 'fixed';
            this._navigation.height = 64;
            this._navigation.left = 0;
            this._navigation.right = 0;
            this._navigation.top = 64;
        }
        return this._navigation;
    }

    private _topBar!: IContainer;

    public get topBar(): IContainer {
        if (!this._topBar) {
            this._topBar = new Container();
            this._topBar.backgroundColor = this.colors.primary.COLOR_900;
            this._topBar.position = 'fixed';
            this._topBar.height = 64;
            this._topBar.top = 0;
            this._topBar.left = 0;
            this._topBar.right = 0;
        }
        return this._topBar;
    }
}
customElements.define('laptop-app', LaptopApp);
