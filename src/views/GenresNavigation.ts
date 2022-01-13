import { DataContainer, VerticalLayout } from 'enta';
import Model from '../state/Model';
import Colors from '../theme/Colors';
import ILink from '../vo/ILink';
import LinkRenderer from './LinkRenderer';

export default class GenresNavigation extends DataContainer<ILink> {
    public constructor() {
        super();
        this.name = 'GenresNavigation';
        this.layout = new VerticalLayout(8);
        this.backgroundColor = Colors.BLUE_DARK;
        this.right = 0;
        this.width = 192;
        this.paddingTop = 64;
        this.paddingBottom = 8;
        this.paddingX = 8;
        this.percentHeight = 100;
        this.DataRendererClass = LinkRenderer;
        this.dataProvider = Model.genres;
    }
}
customElements.define('genres-navigation', GenresNavigation);
