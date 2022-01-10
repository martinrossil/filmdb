import { DataRenderer, ILabelElement, ILinkContainer, LinkContainer } from 'enta';
import SerifLabel from '../components/SerifLabel';
import Colors from '../theme/Colors';
import IProvider from '../vo/IProvider';

export default class ProviderDataRenderer extends DataRenderer<IProvider> {
    public constructor() {
        super();
        this.name = 'ProviderDataRenderer';
        this.percentWidth = 100;
        this.cornerSize = 4;
        this.backgroundColor = Colors.BLUE_DARKEST;
        this.addElement(this.linkContainer);
    }

    protected dataChanged(): void {
        if (this.data) {
            this.nameLabel.text = this.data.label;
            this.linkContainer.href = this.data.href;
        }
    }

    private _linkContainer!: ILinkContainer;
    private get linkContainer(): ILinkContainer {
        if (!this._linkContainer) {
            this._linkContainer = new LinkContainer();
            this._linkContainer.percentWidth = 100;
            this._linkContainer.height = 40;
            this._linkContainer.addElement(this.nameLabel);
        }
        return this._linkContainer;
    }

    private _nameLabel!: ILabelElement;
    private get nameLabel(): ILabelElement {
        if (!this._nameLabel) {
            this._nameLabel = new SerifLabel(16, Colors.BLUE_LIGHTEST);
            this._nameLabel.left = 12;
            this._nameLabel.alignVertical = 'middle';
        }
        return this._nameLabel;
    }
}
customElements.define('provider-data-renderer', ProviderDataRenderer);
