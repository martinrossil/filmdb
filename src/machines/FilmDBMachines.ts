import FilmDB from '../FilmDB';
import LinkMachine from './LinkMachine';
import NavigationMachine from './NavigationMachine';
import ResponsiveMachine from './ResponsiveMachine';
import RoutingMachine from './RoutingMachine';

export default class FilmDBMachines {
    public constructor(filmDB: FilmDB) {
        this.responsiveMachine = new ResponsiveMachine(filmDB);
        this.navigationMachine = new NavigationMachine(filmDB);
        this.routingMachine = new RoutingMachine(filmDB);
        this.linkMachine = new LinkMachine(filmDB);
    }

    private responsiveMachine: ResponsiveMachine;
    private navigationMachine: NavigationMachine;
    private routingMachine: RoutingMachine;
    private linkMachine: LinkMachine;
}
