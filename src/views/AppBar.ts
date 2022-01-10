import { DisplayContainer } from 'enta';
import PageNavigation from '../components/PageNavigation';
import Colors from '../theme/Colors';
import Shadows from '../theme/Shadows';

export default class AppBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'AppBar';
        this.zIndex = 1;
        this.backgroundColor = Colors.BLUE_DARK;
        this.height = 56;
        this.percentWidth = 100;
        this.addFilter(Shadows.BOX_SHADOW_DOWN_1);
        this.addFilter(Shadows.BOX_SHADOW_DOWN_2);
        // this.addElement(new PageNavigation());
    }
}
customElements.define('app-bar', AppBar);
