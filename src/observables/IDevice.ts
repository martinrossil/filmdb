import { Devices } from '../types/Devices';
import { Orientations } from '../types/Orientations';

export default interface IDevice extends EventTarget {
    readonly device: Devices;
    readonly orientation: Orientations;
}
