import { DataContainer, IArrayCollection, ArrayCollection } from 'fuix';
import IMoviePreview from '../domain/IMoviePreview';
import MoviePreview from '../domain/MoviePreview';
import IMobileMoviesList from './IMobileMoviesList';
import MobileMoviePreviewRenderer from './MobileMoviePreviewRenderer';

export default class MobileMoviesList extends DataContainer<IMoviePreview> implements IMobileMoviesList {
    public constructor() {
        super();
        this.display = 'grid';
        this.style['gap'] = '16px';
        this.padding = 16;
        this.style.paddingTop = '72px';
        this.style.paddingBottom = '72px';
        this.style['gridTemplateColumns'] = 'repeat(auto-fill, minmax(150px, 1fr))';
        this.DataRendererClass = MobileMoviePreviewRenderer;
        this.dataProvider = this.movies;
    }

    #movies!: IArrayCollection<IMoviePreview>;

    private get movies(): IArrayCollection<IMoviePreview> {
        if (!this.#movies) {
            const movies: Array<IMoviePreview> = [];
            for (let i = 0; i < 60; i += 1) {
                movies.push(new MoviePreview({ uid: i }));
            }
            this.#movies = new ArrayCollection(movies);
        }
        return this.#movies;
    }
}
customElements.define('mobile-movies-list', MobileMoviesList);
