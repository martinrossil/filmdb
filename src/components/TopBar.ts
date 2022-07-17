import { Container } from 'fuix';
import ITopBar from './ITopBar';

export default class TopBar extends Container implements ITopBar {
    public constructor() {
        super();
        this.backgroundColor = 'white';
        this.position = 'fixed';
        this.display = 'block';
        this.height = 64;
        this.left = 0;
        this.right = 0;
    }
}
customElements.define('top-bar', TopBar);
