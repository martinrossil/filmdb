import { DataRenderer } from 'fuix';
import Theme from '../../theme/Theme';
import IMoviePreview from '../domain/IMoviePreview';

export default class MobileMoviePreviewRenderer extends DataRenderer<IMoviePreview> {
    public constructor() {
        super();
        this.backgroundColor = Theme.singleton.colors.primary.COLOR_800;
        this.display = 'inline';
        this.aspectRatio = 0.67;
    }

    protected dataChanged(): void {
        console.log(this.data);
    }
}
customElements.define('mobile-movie-preview-renderer', MobileMoviePreviewRenderer);
