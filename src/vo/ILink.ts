import { IEventDispatcher } from 'enta';

export default interface ILink extends IEventDispatcher {
    href: string;
    label: string;
    selected: boolean;
    slug: string;
}
