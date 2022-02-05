import { ScreenNavigator } from 'enta';

export default class ResponsiveNavigator extends ScreenNavigator {
    public constructor() {
        super();
        this.name = 'ResponsiveNavigator';
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('responsive-navigator', ResponsiveNavigator);
