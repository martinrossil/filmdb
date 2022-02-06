import { DisplayContainer } from 'enta';

export default class TabletApp extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'TabletApp';
        console.log('TabletApp');
        this.style.backgroundColor = 'purple';
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('tablet-app', TabletApp);
