import { ApplicationElement } from 'enta';
import FilmDBMachines from './machines/FilmDBMachines';
import Colors from './theme/Colors';

export default class FilmDB extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        document.body.style.backgroundColor = Colors.BLUE_DARKEST.toString();
    }

    private machines = new FilmDBMachines(this);
}
customElements.define('film-db', FilmDB);
