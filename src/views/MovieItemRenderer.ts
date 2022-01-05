import { DataRenderer } from 'enta';
import IMovie from '../dto/IMovie';
import Colors from '../theme/Colors';

export default class MovieItemRenderer extends DataRenderer<IMovie> {
    public constructor() {
        super();
        this.backgroundColor = Colors.BLUE_DARK;
    }

    protected dataChanged(): void {
        console.log(this.data);
    }

    protected updateInternalHeight(): void {
        if (this.actualWidth > 0) {
            this.internalHeight = this.actualWidth * 9 / 16;
        }
    }
}
customElements.define('movie-item-renderer', MovieItemRenderer);
