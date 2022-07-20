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
        this.#COLOR_25 = COLOR_25;
        this.#COLOR_50 = COLOR_50;
        this.#COLOR_100 = COLOR_100;
        this.#COLOR_200 = COLOR_200;
        this.#COLOR_300 = COLOR_300;
        this.#COLOR_400 = COLOR_400;
        this.#COLOR_500 = COLOR_500;
        this.#COLOR_600 = COLOR_600;
        this.#COLOR_700 = COLOR_700;
        this.#COLOR_800 = COLOR_800;
        this.#COLOR_900 = COLOR_900;
    }

    #COLOR_25: string;

    public get COLOR_25(): string {
        return this.#COLOR_25;
    }

    #COLOR_50: string;

    public get COLOR_50(): string {
        return this.#COLOR_50;
    }

    #COLOR_100: string;

    public get COLOR_100(): string {
        return this.#COLOR_100;
    }

    #COLOR_200: string;

    public get COLOR_200(): string {
        return this.#COLOR_200;
    }

    #COLOR_300: string;

    public get COLOR_300(): string {
        return this.#COLOR_300;
    }

    #COLOR_400: string;

    public get COLOR_400(): string {
        return this.#COLOR_400;
    }

    #COLOR_500: string;

    public get COLOR_500(): string {
        return this.#COLOR_500;
    }

    #COLOR_600: string;

    public get COLOR_600(): string {
        return this.#COLOR_600;
    }

    #COLOR_700: string;

    public get COLOR_700(): string {
        return this.#COLOR_700;
    }

    #COLOR_800: string;

    public get COLOR_800(): string {
        return this.#COLOR_800;
    }

    #COLOR_900: string;

    public get COLOR_900(): string {
        return this.#COLOR_900;
    }
}
