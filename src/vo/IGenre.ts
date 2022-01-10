import { IEventDispatcher } from 'enta';

export default interface IGenre extends IEventDispatcher {
    href: string;
    id: number;
    label: string;
    selected: boolean;
    slug: string;
}
