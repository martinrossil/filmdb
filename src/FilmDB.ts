import { ApplicationElement } from 'enta';
import APIMachine from './machines/APIMachine';
import NavigationMachine from './machines/NavigationMachine';
import Colors from './theme/Colors';
import MoviesList from './views/MoviesList';

export default class FilmDB extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        this.backgroundColor = Colors.BLUE_DARKEST;
        this.addElement(new MoviesList());
    }

    private navigationMachine: NavigationMachine = new NavigationMachine(this);
    private apiMachine: APIMachine = new APIMachine(this);
}
customElements.define('film-db', FilmDB);
