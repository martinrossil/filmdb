import { Container } from 'fuix';
import Theme from '../../theme/Theme';
import IMobileBottomNavigation from './IMobileBottomNavigation';

export default class MobileBottomNavigation extends Container implements IMobileBottomNavigation {
    public constructor() {
        super();
        this.backgroundColor = Theme.singleton.colors.primary.COLOR_900;
    }
}
customElements.define('mobile-bottom-navigation', MobileBottomNavigation);
