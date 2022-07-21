import { Devices } from '../types/Devices';
import { Orientations } from '../types/Orientations';
import IDevice from './IDevice';

export default class Device extends EventTarget implements IDevice {
    public static CHANGED = 'CHANGED';

    static #singleton: IDevice;

    public static get singleton(): IDevice {
        if (!this.#singleton) {
            this.#singleton = new Device();
        }
        return this.#singleton;
    }

    public constructor() {
        super();
        this.#device = this.#getDevice();
        this.#orientation = this.#getOrientation();
        window.addEventListener('resize', this.#resize.bind(this));
    }

    #resize(): void {
        const device = this.#getDevice();
        const orientation = this.#getOrientation();
        if (this.#device !== device || this.#orientation !== orientation) {
            this.#device = device;
            this.#orientation = orientation;
            this.dispatchEvent(new CustomEvent(Device.CHANGED, { detail: this.#device }));
        }
    }

    #device: Devices;

    public get device(): Devices {
        return this.#device;
    }

    #orientation: Orientations;

    public get orientation(): Orientations {
        return this.#orientation;
    }

    #getDevice(): Devices {
        const orientation = this.#getOrientation();
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
            if (orientation === 'landscape') {
                return 'tablet';
            }
            return 'laptop';
        }
        return 'desktop';
    }

    #getOrientation(): Orientations {
        if (window.innerWidth <= window.innerHeight) {
            return 'portrait';
        }
        return 'landscape';
    }
}
