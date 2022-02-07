import { ApplicationElement, IEventListener } from 'enta';
import FilmDBMachines from './machines/FilmDBMachines';
import Model from './state/Model';
import Colors from './theme/Colors';
import Factory from './views/Factory';

export default class FilmDB extends ApplicationElement {
    public constructor() {
        super();
        this.style.height = '100vh';
        document.body.style.backgroundColor = Colors.BLUE_DARKEST.toString();
        Model.device.addEventListener('changed', this.deviceChanged.bind(this) as IEventListener);
    }

    private deviceChanged(e: CustomEvent<string>): void {
        this.removeElements();
        const device = e.detail;
        if (device === 'Mobile') {
            this.addElement(Factory.mobileApp);
        } else if (device === 'Tablet') {
            this.addElement(Factory.tabletApp);
        } else if (device === 'Laptop') {
            this.addElement(Factory.laptopApp);
        } else if (device === 'Desktop') {
            this.addElement(Factory.desktopApp);
        }
    }

    private machines = new FilmDBMachines(this);
}
customElements.define('film-db', FilmDB);
