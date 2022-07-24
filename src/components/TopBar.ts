import { Container } from 'fuix';
import Device from '../observables/Device';
import IDevice from '../observables/IDevice';
import IColors from '../theme/IColors';
import IShadows from '../theme/IShadows';
import Theme from '../theme/Theme';

export default class TopBar extends Container {
    public constructor() {
        super();
        this.display = 'block';
        this.position = 'fixed';
        this.left = 0;
        this.right = 0;
        this.boxShadow = this.shadows.md;
        this.backgroundColor = this.colors.primary.COLOR_700;
        this.updatePropertiesFromDevice();
        this.device.addEventListener(Device.CHANGED, this.updatePropertiesFromDevice.bind(this));
    }

    private updatePropertiesFromDevice(): void {
        const { name } = this.device;
        if (name === 'laptop' || name === 'desktop') {
            this.height = 72;
        } else {
            this.height = 64;
        }
    }

    private colors: IColors = Theme.singleton.colors;

    private shadows: IShadows = Theme.singleton.shadows;

    private device: IDevice = Device.singleton;
}
customElements.define('top-bar', TopBar);
