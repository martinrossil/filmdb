import { DataRenderer, ILabelElement, VerticalLayout } from 'enta';
import SerifLabel from '../components/SerifLabel';
import { MovieDiscoverSchema } from '../schema/MovieDiscoverSchema';
import Colors from '../theme/Colors';
import BackdropImage from './BackdropImage';

export default class MovieItemRenderer extends DataRenderer<MovieDiscoverSchema> {
    public constructor() {
        super();
        this.clip = 'hidden';
        this.layout = new VerticalLayout(16);
        this.paddingBottom = 16;
        this.addElements([this.image, this.titleLabel]);
    }

    protected dataChanged(): void {
        if (this.data) {
            this.titleLabel.text = this.data.title;
            this.image.alt = this.data.title;
            if (this.data['backdrop_path']) {
                this.image.source = 'https://filmdb.pages.dev/images/backdrop' + this.data.backdrop_path;
            }
        }
    }

    private _image!: BackdropImage;
    private get image(): BackdropImage {
        if (!this._image) {
            this._image = new BackdropImage();
        }
        return this._image;
    }

    private _titleLabel!: ILabelElement;
    private get titleLabel(): ILabelElement {
        if (!this._titleLabel) {
            this._titleLabel = new SerifLabel(16, Colors.BLUE_LIGHTEST);
            this._titleLabel.percentWidth = 100;
        }
        return this._titleLabel;
    }
}
customElements.define('movie-item-renderer', MovieItemRenderer);
