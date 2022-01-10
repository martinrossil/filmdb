import { IEventDispatcher } from 'enta';

export default interface IProvider extends IEventDispatcher {
    href: string;
    id: number;
    label: string;
    selected: boolean;
    slug: string;
}
