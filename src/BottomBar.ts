import { Container, Position } from 'fuix';

export default class BottomBar extends Container {
    public constructor() {
        super();
        this.backgroundColor = '#003366';
        this.height = 56;
        this.position = Position.FIXED;
        this.left = this.right = this.bottom = 0;
    }
}
customElements.define('bottom-bar', BottomBar);