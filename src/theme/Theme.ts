import ColorRange from './ColorRange';
import Colors from './Colors';
import IColorRange from './IColorRange';
import IColors from './IColors';
import ITheme from './ITheme';

export default class Theme extends EventTarget implements ITheme {
    public static CHANGED = 'CHANGED';

    static #singleton: ITheme;

    public static get singleton(): ITheme {
        if (!this.#singleton) {
            this.#singleton = new Theme();
        }
        return this.#singleton;
    }

    public constructor() {
        super();
    }

    #colors!: IColors;

    public get colors(): IColors {
        if (!this.#colors) {
            this.#colors = this.#defaultColors;
        }
        return this.#colors;
    }

    // Dark Blue
    #defaultPrimary: IColorRange = new ColorRange('#F5F8FF', '#EFF4FF', '#D1E0FF', '#B2CCFF', '#84ADFF', '#528BFF', '#2970FF', '#155EEF', '#004EEB', '#0040C1', '#00359E');

    // Yellow
    #defaultSecondary: IColorRange = new ColorRange('#FEFDF0', '#FEFBE8', '#FEF7C3', '#FEEE95', '#FDE272', '#FAC515', '#EAAA08', '#CA8504', '#A15C07', '#854A0E', '#713B12');

    // Blue Gray
    #defaultNeutral: IColorRange = new ColorRange('#FCFCFD', '#F8F9FC', '#EAECF5', '#D5D9EB', '#B3B8DB', '#717BBC', '#4E5BA6', '#3E4784', '#363F72', '#293056', '#101323');

    // Green
    #defaultSuccess: IColorRange = new ColorRange('#F6FEF9', '#ECFDF3', '#D1FADF', '#A6F4C5', '#6CE9A6', '#32D583', '#12B76A', '#039855', '#027A48', '#05603A', '#054F31');

    // Dark Orange
    #defaultWarning: IColorRange = new ColorRange('#FFF9F5', '#FFF4ED', '#FFE6D5', '#FFD6AE', '#FF9C66', '#FF692E', '#FF4405', '#E62E05', 'BC1B06', '#97180C', '#771A0D');

    // Red
    #defaultError: IColorRange = new ColorRange('#FFFBFA', '#FEF3F2', '#FEE4E2', '#FECDCA', '#FDA29B', '#F97066', '#F04438', '#D92D20', '#B42318', '#912018', '#7A271A');

    #defaultColors: IColors = new Colors(this.#defaultPrimary, this.#defaultSecondary, this.#defaultNeutral, this.#defaultSuccess, this.#defaultWarning, this.#defaultError);
}
