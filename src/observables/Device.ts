import { Devices } from '../types/Devices';
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
        window.addEventListener('resize', this.#resize.bind(this));
    }

    #resize(): void {
        const device = this.#getDevice();
        if (this.#device !== device) {
            this.#device = device;
            this.dispatchEvent(new CustomEvent(Device.CHANGED, { detail: this.#device }));
        }
    }

    #device: Devices;

    public get device(): Devices {
        return this.#device;
    }

    #getDevice(): Devices {
        if (window.innerWidth <= 600) {
            return 'mobile';
        }
        if (window.innerWidth <= 1024) {
            return 'tablet';
        }
        if (window.innerWidth <= 1440) {
            return 'laptop';
        }
        return 'desktop';
    }
}
