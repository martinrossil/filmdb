import IColors from './IColors';

export default interface ITheme extends EventTarget {
    readonly colors: IColors;
}
