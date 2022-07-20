import IColorRange from './IColorRange';

export default interface IColors {
    readonly primary: IColorRange;
    readonly secondary: IColorRange;
    readonly neutral: IColorRange;
    readonly success: IColorRange;
    readonly warning: IColorRange;
    readonly error: IColorRange;
}
