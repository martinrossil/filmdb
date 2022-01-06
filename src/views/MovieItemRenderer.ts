import { DataRenderer } from 'enta';
import { MovieDiscoverSchema } from '../schema/MovieDiscoverSchema';
import Colors from '../theme/Colors';
import BackdropImage from './BackdropImage';

export default class MovieItemRenderer extends DataRenderer<MovieDiscoverSchema> {
    public constructor() {
        super();
        this.backgroundColor = Colors.BLUE_DARK;
        this.addElement(this.image);
    }

    protected dataChanged(): void {
        console.log(this.data);
        if (this.data && this.data['backdrop_path']) {
            this.image.source = 'https://image.tmdb.org/t/p/w300/' + this.data['backdrop_path'];
        }
    }

    protected updateInternalHeight(): void {
        if (this.actualWidth > 0) {
            this.internalHeight = this.actualWidth * 9 / 16;
        }
    }

    private _image!: BackdropImage;
    private get image(): BackdropImage {
        if (!this._image) {
            this._image = new BackdropImage();
        }
        return this._image;
    }
}
customElements.define('movie-item-renderer', MovieItemRenderer);
