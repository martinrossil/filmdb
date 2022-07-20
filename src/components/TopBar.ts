import { Container } from 'fuix';
import ITopBar from './ITopBar';

export default class TopBar extends Container implements ITopBar {
    public constructor() {
        super();
        this.backgroundColor = 'rgba(20, 36, 51, 0.8)';
        this.position = 'fixed';
        this.display = 'block';
        this.height = 64;
        this.left = 0;
        this.right = 0;
        this.style.borderBottom = '2px solid #22476b';
        // this.style.boxShadow = 'inset 0 0 20px rgb(102 179 255 / 20%)';
        this.style.backgroundImage = 'linear-gradient(0deg, rgba(20, 61, 102, 0.2), rgba(20, 61, 102, 0) 50%)';
    }
}
customElements.define('top-bar', TopBar);
