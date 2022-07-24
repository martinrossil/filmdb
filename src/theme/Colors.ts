import IColorRange from './IColorRange';
import IColors from './IColors';

export default class Colors implements IColors {
    public constructor(primary: IColorRange, secondary: IColorRange, neutral: IColorRange, success: IColorRange, warning: IColorRange, error: IColorRange) {
        this._primary = primary;
        this._secondary = secondary;
        this._neutral = neutral;
        this._success = success;
        this._warning = warning;
        this._error = error;
    }

    private _primary: IColorRange;

    public get primary(): IColorRange {
        return this._primary;
    }

    private _secondary: IColorRange;

    public get secondary(): IColorRange {
        return this._secondary;
    }

    private _neutral: IColorRange;

    public get neutral(): IColorRange {
        return this._neutral;
    }

    private _success: IColorRange;

    public get success(): IColorRange {
        return this._success;
    }

    private _warning: IColorRange;

    public get warning(): IColorRange {
        return this._warning;
    }

    private _error: IColorRange;

    public get error(): IColorRange {
        return this._error;
    }
}
