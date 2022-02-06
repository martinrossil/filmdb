import { DisplayContainer } from 'enta';

export default class MobileApp extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'MobileApp';
        console.log('MobileApp');
        this.style.backgroundColor = 'green';
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('mobile-app', MobileApp);
