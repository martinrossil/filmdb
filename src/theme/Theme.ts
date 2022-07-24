import ColorRange from './ColorRange';
import Colors from './Colors';
import IColorRange from './IColorRange';
import IColors from './IColors';
import IShadows from './IShadows';
import ITheme from './ITheme';
import Shadows from './Shadows';

export default class Theme extends EventTarget implements ITheme {
    public static CHANGED = 'CHANGED';

    private static _singleton: ITheme;

    public static get singleton(): ITheme {
        if (!this._singleton) {
            this._singleton = new Theme();
        }
        return this._singleton;
    }

    public constructor() {
        super();
    }

    private _shadows!: IShadows;

    public get shadows(): IShadows {
        if (!this._shadows) {
            this._shadows = new Shadows(this._xs, this._sm, this._md, this._lg, this._xl);
        }
        return this._shadows;
    }

    private _xs = '0px 1px 2px rgba(16, 24, 40, 0.05)';

    private _sm = '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)';

    private _md = '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)';

    private _lg = '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)';

    private _xl = '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)';

    private _colors!: IColors;

    public get colors(): IColors {
        if (!this._colors) {
            this._colors = this._defaultColors;
        }
        return this._colors;
    }

    // Dark Blue
    private _defaultPrimary: IColorRange = new ColorRange('#F5F8FF', '#EFF4FF', '#D1E0FF', '#B2CCFF', '#84ADFF', '#528BFF', '#2970FF', '#155EEF', '#004EEB', '#0040C1', '#00359E');

    // Yellow
    private _defaultSecondary: IColorRange = new ColorRange('#FEFDF0', '#FEFBE8', '#FEF7C3', '#FEEE95', '#FDE272', '#FAC515', '#EAAA08', '#CA8504', '#A15C07', '#854A0E', '#713B12');

    // Blue Gray
    private _defaultNeutral: IColorRange = new ColorRange('#FCFCFD', '#F8F9FC', '#EAECF5', '#D5D9EB', '#B3B8DB', '#717BBC', '#4E5BA6', '#3E4784', '#363F72', '#293056', '#101323');

    // Green
    private _defaultSuccess: IColorRange = new ColorRange('#F6FEF9', '#ECFDF3', '#D1FADF', '#A6F4C5', '#6CE9A6', '#32D583', '#12B76A', '#039855', '#027A48', '#05603A', '#054F31');

    // Dark Orange
    private _defaultWarning: IColorRange = new ColorRange('#FFF9F5', '#FFF4ED', '#FFE6D5', '#FFD6AE', '#FF9C66', '#FF692E', '#FF4405', '#E62E05', 'BC1B06', '#97180C', '#771A0D');

    // Red
    private _defaultError: IColorRange = new ColorRange('#FFFBFA', '#FEF3F2', '#FEE4E2', '#FECDCA', '#FDA29B', '#F97066', '#F04438', '#D92D20', '#B42318', '#912018', '#7A271A');

    private _defaultColors: IColors = new Colors(this._defaultPrimary, this._defaultSecondary, this._defaultNeutral, this._defaultSuccess, this._defaultWarning, this._defaultError);
}
