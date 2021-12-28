import { DataRenderer } from 'fuix'
import IMovie from '../shared/IMovie';

export default class MovieRenderer extends DataRenderer<IMovie> {
    public constructor() {
        super();
        this.width = 100;
        this.height = 100;
        this.flexGrow = 1;
        this.backgroundColor = 'blue';
    }
}
customElements.define('movie-renderer', MovieRenderer);