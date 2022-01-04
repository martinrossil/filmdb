import { ItemRenderer } from 'enta';
import IMovie from '../dto/IMovie';
import Colors from '../theme/Colors';

export default class MovieItemRenderer extends ItemRenderer<IMovie> {
    public constructor() {
        super();
        // this.width = this.height = 100;
        this.height = 100;
        this.backgroundColor = Colors.BLUE_DARK;
    }
}
customElements.define('movie-item-renderer', MovieItemRenderer);
