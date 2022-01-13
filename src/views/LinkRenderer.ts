import { DataRenderer, ILabelElement, ILinkContainer, IMouseTouch, LinkContainer, MouseTouchMachine } from 'enta';
import SerifLabel from '../components/SerifLabel';
import Colors from '../theme/Colors';
import ILink from '../vo/ILink';

export default class LinkRenderer extends DataRenderer<ILink> implements IMouseTouch {
    public constructor() {
        super();
        this.name = 'LinkRenderer';
        this.percentWidth = 100;
        this.cornerSize = 4;
        this.addElement(this.linkContainer);
    }

    public initial(): void {
        this.backgroundColor = null;
    }

    public hover(): void {
        this.backgroundColor = Colors.BLUE;
    }

    public pressed(x: number, y: number): void {
        this.backgroundColor = Colors.BLUE_DARKEST;
    }

    public clicked(): void {
        // overriden
    }

    protected dataChanged(): void {
        if (this.data) {
            this.nameLabel.text = this.data.label;
            this.linkContainer.href = this.data.href;
        }
    }

    private mouseTouchMachine: MouseTouchMachine = new MouseTouchMachine(this);

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
customElements.define('link-renderer', LinkRenderer);
