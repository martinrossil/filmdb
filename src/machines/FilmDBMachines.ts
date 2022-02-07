import FilmDB from '../FilmDB';
import NavigationMachine from './NavigationMachine';
import ResponsiveMachine from './ResponsiveMachine';

export default class FilmDBMachines {
    public constructor(filmDB: FilmDB) {
        this.responsiveMachine = new ResponsiveMachine(filmDB);
        this.navigationMachine = new NavigationMachine(filmDB);
    }

    private responsiveMachine: ResponsiveMachine;
    private navigationMachine: NavigationMachine;
}
