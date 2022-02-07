import { EventDispatcher } from 'enta';

export default class OberservableString extends EventDispatcher {
    public constructor(value = '') {
        super();
        this.name = 'OberservableString';
        this._value = value;
    }

    private _value;

    public set value(value: string) {
        if (this._value !== value) {
            this._value = value;
            console.log('device', value);
            this.dispatchEvent(new CustomEvent('changed', { detail: value }));
        }
    }

    public get value(): string {
        return this._value;
    }
}
