import IShadows from './IShadows';

export default class Shadows implements IShadows {
    public constructor(xs: string, sm: string, md: string, lg: string, xl: string) {
        this._xs = xs;
        this._sm = sm;
        this._md = md;
        this._lg = lg;
        this._xl = xl;
    }

    private _xs: string;

    public get xs(): string {
        return this._xs;
    }

    private _sm: string;

    public get sm(): string {
        return this._sm;
    }

    private _md: string;

    public get md(): string {
        return this._md;
    }

    private _lg: string;

    public get lg(): string {
        return this._lg;
    }

    private _xl: string;

    public get xl(): string {
        return this._xl;
    }
}
