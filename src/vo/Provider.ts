import { EventDispatcher } from 'enta';
import IProvider from './IProvider';

export default class Provider extends EventDispatcher implements IProvider {
    public constructor(label: string, id: number, slug: string) {
        super();
        this.name = 'Provider';
        this.label = label;
        this.id = id;
        this.slug = slug;
        this.href = '/' + slug + '/a/a/1';
    }

    public id: number
    public label: string;
    public slug: string;

    private _href = '';

    public set href(value: string) {
        if (this._href === value) {
            return;
        }
        this._href = value;
        this.notifyChanged();
    }

    public get href(): string {
        return this._href;
    }

    private _selected = false;

    public set selected (value: boolean) {
        if (this._selected === value) {
            return;
        }
        this._selected = value;
        this.notifyChanged();
    }

    public get selected(): boolean {
        return this._selected;
    }

    private notifyChanged(): void {
        this.dispatch('changed');
    }
}
