import { IEventDispatcher } from 'enta';

export default interface ILink extends IEventDispatcher {
    defaultHref: string;
    href: string;
    label: string;
    selected: boolean;
    slug: string;
}
