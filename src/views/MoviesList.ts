import { ColumnLayout, DataContainer } from 'enta';
import IMovie from '../dto/IMovie';
import { MovieDiscoverSchema } from '../schema/MovieDiscoverSchema';
import Model from '../state/Model';
import MovieItemRenderer from './MovieItemRenderer';

export default class MoviesList extends DataContainer<MovieDiscoverSchema> {
    public constructor() {
        super();
        this.percentWidth = this.percentHeight = 100;
        this.DataRendererClass = MovieItemRenderer;
        this.dataProvider = Model.movies;
        this.padding = 16;
        this.layout = new ColumnLayout(128, 5, 16);
    }
}
customElements.define('movies-list', MoviesList);
