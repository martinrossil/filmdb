import { Application } from 'fuix';
import ResponsiveMachine from './machines/ResponsiveMachine';

export default class FilmDB extends Application {
    public constructor() {
        super();
        new ResponsiveMachine(this);
    }
}
customElements.define('film-db', FilmDB);
