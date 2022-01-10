import { DisplayContainer, HorizontalLayout, ILabelElement } from 'enta';
import Colors from '../theme/Colors';
import CircleButton from './CircleButton';
import SerifLabel from './SerifLabel';

export default class PageNavigation extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'PageNavigation';
        this.size(128, 48);
        this.layout = new HorizontalLayout(NaN, 'none', 'middle');
        this.alignHorizontal = 'center';
        this.alignVertical = 'middle';
        this.addElements([new CircleButton('PREVIOUS_PAGE'), this.pageLabel, new CircleButton('NEXT_PAGE')]);
    }

    private _pageLabel!: ILabelElement;
    private get pageLabel(): ILabelElement {
        if (!this._pageLabel) {
            this._pageLabel = new SerifLabel(24, Colors.WHITE);
            this._pageLabel.percentWidth = 100;
            this._pageLabel.textAlign = 'center';
            this._pageLabel.text = '1';
        }
        return this._pageLabel;
    }
}
customElements.define('page-navigation', PageNavigation);
