import { Application } from 'fuix';
import ResponsiveMachine from './machines/ResponsiveMachine';
import Colors from './theme/Colors';
export default class FilmDB extends Application {
    public constructor() {
        super();
        this.style.height = '100vh';
        this.bodyBackgroundColor = Colors.BLUE_DARKEST;
        new ResponsiveMachine(this);
    }
}
customElements.define('film-db', FilmDB);
