import { Application, ArrayCollection, DataContainer, Display, FlexWrap, IArrayCollection, IDataContainer, Overflow } from 'fuix';
import BottomBar from './BottomBar';
import IMovie from '../shared/IMovie';
import Movie from '../shared/Movie';
import MovieRenderer from './MovieRenderer';

export default class FilmDB extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        this.display = Display.BLOCK;
        this.style.height = '100vh';
        this.addComponents([this.movieContainer, new BottomBar()]);
    }

    private _movieContainer!: IDataContainer<IMovie>
    private get movieContainer(): IDataContainer<IMovie> {
        if (!this._movieContainer) {
            this._movieContainer = new DataContainer();
            this._movieContainer.display = Display.FLEX;
            this._movieContainer.flexWrap = FlexWrap.WRAP;
            this._movieContainer.gap = 16;
            this._movieContainer.DataRendererClass = MovieRenderer;
            this._movieContainer.dataProvider = this.movies;
        }
        return this._movieContainer;
    }

    private _movies!: IArrayCollection<IMovie>;
    private get movies(): IArrayCollection<IMovie> {
        if (!this._movies) {
            const items: Array<IMovie> = [];
            for (let i = 0; i < 1000; i++) {
                items.push(new Movie(i, Math.random().toString()))
            }
            this._movies = new ArrayCollection(items);
        }
        return this._movies;
    }
}
customElements.define('film-db', FilmDB);
