import { Devices } from '../types/Devices';
import { Orientations } from '../types/Orientations';
import IDevice from './IDevice';

export default class Device extends EventTarget implements IDevice {
    public static CHANGED = 'CHANGED';

    private static _singleton: IDevice;

    public static get singleton(): IDevice {
        if (!this._singleton) {
            this._singleton = new Device();
        }
        return this._singleton;
    }

    public constructor() {
        super();
        this._name = this.getDevice();
        this._orientation = this.getOrientation();
        window.addEventListener('resize', this.resize.bind(this));
    }

    private resize(): void {
        const device = this.getDevice();
        const orientation = this.getOrientation();
        if (this.name !== device || this.orientation !== orientation) {
            this._name = device;
            this._orientation = orientation;
            this.dispatchEvent(new CustomEvent(Device.CHANGED));
        }
    }

    private _name: Devices;

    public get name(): Devices {
        return this._name;
    }

    private _orientation: Orientations;

    public get orientation(): Orientations {
        return this._orientation;
    }

    private getDevice(): Devices {
        const orientation = this.getOrientation();
        if (window.innerWidth <= 600) {
            return 'mobile';
        }
        if (window.innerWidth <= 960) {
            if (orientation === 'portrait') {
                return 'tablet';
            }
            return 'mobile';
        }
        if (window.innerWidth <= 1280) {
            return 'tablet';
        }
        if (window.innerWidth <= 1600) {
            return 'laptop';
        }
        return 'desktop';
    }

    private getOrientation(): Orientations {
        if (window.innerWidth <= window.innerHeight) {
            return 'portrait';
        }
        return 'landscape';
    }
}
