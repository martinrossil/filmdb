import { DataContainer, VerticalLayout } from 'enta';
import Model from '../state/Model';
import Colors from '../theme/Colors';
import IProvider from '../vo/IProvider';
import ProviderDataRenderer from './ProviderDataRenderer';

export default class ProvidersNavigation extends DataContainer<IProvider> {
    public constructor() {
        super();
        this.name = 'ProvidersNavigation';
        this.layout = new VerticalLayout(8);
        this.backgroundColor = Colors.BLUE_DARK;
        this.width = 192;
        this.paddingTop = 64;
        this.paddingBottom = 8;
        this.paddingX = 8;
        this.percentHeight = 100;
        this.DataRendererClass = ProviderDataRenderer;
        this.dataProvider = Model.providers;
    }
}
customElements.define('providers-navigation', ProvidersNavigation);
