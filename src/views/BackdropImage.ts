import { ImageElement } from 'enta';

export default class BackdropImage extends ImageElement {
    public constructor() {
        super();
        this.name = 'BackdropImage';
        this.objectFit = 'cover';
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('backdrop-image', BackdropImage);
