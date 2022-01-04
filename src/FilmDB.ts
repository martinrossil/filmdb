import { ApplicationElement } from 'enta';
import Colors from './theme/Colors';
import MoviesList from './views/MoviesList';

export default class FilmDB extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        this.backgroundColor = Colors.BLUE_DARKEST;
        this.addElement(new MoviesList());
    }
}
customElements.define('film-db', FilmDB);
