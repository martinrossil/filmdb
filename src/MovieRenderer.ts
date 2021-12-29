import { DataRenderer } from 'fuix'
import IMovie from '../dto/IMovie';

export default class MovieRenderer extends DataRenderer<IMovie> {
    public constructor() {
        super();
        this.minWidth = 200;
        // this.height = 100;
        this.flexGrow = 1;
        this.aspectRatio = 1.5;
        this.backgroundColor = '#0F2133';
    }
}
customElements.define('movie-renderer', MovieRenderer);