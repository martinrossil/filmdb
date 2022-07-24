import IColors from './IColors';
import IShadows from './IShadows';

export default interface ITheme extends EventTarget {
    readonly colors: IColors;
    readonly shadows: IShadows;
}
