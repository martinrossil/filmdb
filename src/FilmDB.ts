import { ApplicationElement } from 'enta';
import APIMachine from './machines/APIMachine';
import NavigationMachine from './machines/NavigationMachine';
import Colors from './theme/Colors';
import AppBar from './views/AppBar';
import GenresNavigation from './views/GenresNavigation';
import MoviesList from './views/MoviesList';
import ProvidersNavigation from './views/ProvidersNavigation';

export default class FilmDB extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        this.backgroundColor = Colors.BLUE_DARKEST;
        this.addElements([
            new AppBar(),
            new ProvidersNavigation(),
            new MoviesList(),
            new GenresNavigation()
        ]);
    }

    private navigationMachine: NavigationMachine = new NavigationMachine(this);
    private apiMachine: APIMachine = new APIMachine(this);
}
customElements.define('film-db', FilmDB);
