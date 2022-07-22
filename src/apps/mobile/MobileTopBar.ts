import { Container } from 'fuix';
import Theme from '../../theme/Theme';
import IMobileTopBar from './IMobileTopBar';

export default class MobileTopBar extends Container implements IMobileTopBar {
    public constructor() {
        super();
        this.backgroundColor = Theme.singleton.colors.primary.COLOR_900;
    }
}
customElements.define('mobile-top-bar', MobileTopBar);
