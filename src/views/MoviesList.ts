import { ColumnLayout, List } from 'enta';
import IMovie from '../dto/IMovie';
import Model from '../state/Model';
import MovieItemRenderer from './MovieItemRenderer';

export default class MoviesList extends List<IMovie> {
    public constructor() {
        super();
        this.percentWidth = this.percentHeight = 100;
        this.ItemRendererClass = MovieItemRenderer;
        this.dataProvider = Model.movies;
        this.padding = 16;
        this.layout = new ColumnLayout(128, 5, 16);
    }
}
customElements.define('movies-list', MoviesList);
