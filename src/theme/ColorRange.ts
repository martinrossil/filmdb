import IColorRange from './IColorRange';

export default class ColorRange implements IColorRange {
    public constructor(
        COLOR_25: string,
        COLOR_50: string,
        COLOR_100: string,
        COLOR_200: string,
        COLOR_300: string,
        COLOR_400: string,
        COLOR_500: string,
        COLOR_600: string,
        COLOR_700: string,
        COLOR_800: string,
        COLOR_900: string,
        ) {
        this._COLOR_25 = COLOR_25;
        this._COLOR_50 = COLOR_50;
        this._COLOR_100 = COLOR_100;
        this._COLOR_200 = COLOR_200;
        this._COLOR_300 = COLOR_300;
        this._COLOR_400 = COLOR_400;
        this._COLOR_500 = COLOR_500;
        this._COLOR_600 = COLOR_600;
        this._COLOR_700 = COLOR_700;
        this._COLOR_800 = COLOR_800;
        this._COLOR_900 = COLOR_900;
    }

    private _COLOR_25: string;

    public get COLOR_25(): string {
        return this._COLOR_25;
    }

    private _COLOR_50: string;

    public get COLOR_50(): string {
        return this._COLOR_50;
    }

    private _COLOR_100: string;

    public get COLOR_100(): string {
        return this._COLOR_100;
    }

    private _COLOR_200: string;

    public get COLOR_200(): string {
        return this._COLOR_200;
    }

    private _COLOR_300: string;

    public get COLOR_300(): string {
        return this._COLOR_300;
    }

    private _COLOR_400: string;

    public get COLOR_400(): string {
        return this._COLOR_400;
    }

    private _COLOR_500: string;

    public get COLOR_500(): string {
        return this._COLOR_500;
    }

    private _COLOR_600: string;

    public get COLOR_600(): string {
        return this._COLOR_600;
    }

    private _COLOR_700: string;

    public get COLOR_700(): string {
        return this._COLOR_700;
    }

    private _COLOR_800: string;

    public get COLOR_800(): string {
        return this._COLOR_800;
    }

    private _COLOR_900: string;

    public get COLOR_900(): string {
        return this._COLOR_900;
    }
}
