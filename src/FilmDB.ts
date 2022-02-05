import { ApplicationElement } from 'enta';
import Colors from './theme/Colors';
import ResponsiveNavigator from './views/ResponsiveNavigator';

export default class FilmDB extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        document.body.style.backgroundColor = Colors.BLUE_DARKEST.toString();
        this.addElement(new ResponsiveNavigator());
    }
}
customElements.define('film-db', FilmDB);
