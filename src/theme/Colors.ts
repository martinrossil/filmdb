import IColorRange from './IColorRange';
import IColors from './IColors';

export default class Colors implements IColors {
    public constructor(primary: IColorRange, secondary: IColorRange, neutral: IColorRange, success: IColorRange, warning: IColorRange, error: IColorRange) {
        this.#primary = primary;
        this.#secondary = secondary;
        this.#neutral = neutral;
        this.#success = success;
        this.#warning = warning;
        this.#error = error;
    }

    #primary: IColorRange;

    public get primary(): IColorRange {
        return this.#primary;
    }

    #secondary: IColorRange;

    public get secondary(): IColorRange {
        return this.#secondary;
    }

    #neutral: IColorRange;

    public get neutral(): IColorRange {
        return this.#neutral;
    }

    #success: IColorRange;

    public get success(): IColorRange {
        return this.#success;
    }

    #warning: IColorRange;

    public get warning(): IColorRange {
        return this.#warning;
    }

    #error: IColorRange;

    public get error(): IColorRange {
        return this.#error;
    }
}
