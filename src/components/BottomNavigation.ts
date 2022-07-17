import { Container } from 'fuix';
import IBottomNavigation from './IBottomNavigation';

export default class BottomNavigation extends Container implements IBottomNavigation {
    public constructor() {
        super();
        this.backgroundColor = 'white';
        this.position = 'fixed';
        this.display = 'block';
        this.height = 64;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }
}
customElements.define('bottom-navigation', BottomNavigation);
