import { ApplicationElement, IMachine } from 'enta';
import APIMachine from './machines/APIMachine';
import FilmDBMachine from './machines/FilmDBMachine';
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
        document.body.style.backgroundColor = Colors.BLUE_DARKEST.toString();
        /* this.addElements([
            new AppBar(),
            new ProvidersNavigation(),
            new MoviesList(),
            new GenresNavigation()
        ]); */
    }

    private filmDBMachine: IMachine = new FilmDBMachine(this);

    // private navigationMachine: NavigationMachine = new NavigationMachine(this);
    // private apiMachine: APIMachine = new APIMachine(this);
}
customElements.define('film-db', FilmDB);
