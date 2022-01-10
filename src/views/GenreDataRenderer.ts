import { DataRenderer, ILabelElement } from 'enta';
import SerifLabel from '../components/SerifLabel';
import Colors from '../theme/Colors';
import IGenre from '../vo/IGenre';

export default class GenreDataRenderer extends DataRenderer<IGenre> {
    public constructor() {
        super();
        this.name = 'GenreDataRenderer';
        this.height = 40;
        this.percentWidth = 100;
        this.cornerSize = 4;
        this.backgroundColor = Colors.BLUE_DARKEST;
        this.addElement(this.nameLabel);
    }

    protected dataChanged(): void {
        if (this.data) {
            this.nameLabel.text = this.data.label;
        }
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
customElements.define('genre-data-renderer', GenreDataRenderer);
