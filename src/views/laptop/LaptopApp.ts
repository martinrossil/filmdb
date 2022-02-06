import { DisplayContainer } from 'enta';

export default class LaptopApp extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'LaptopApp';
        console.log('LaptopApp');
        this.style.backgroundColor = 'blue';
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('laptop-app', LaptopApp);
