import { DisplayContainer } from 'enta';

export default class DesktopApp extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'DesktopApp';
        console.log('DesktopApp');
        this.style.backgroundColor = 'red';
        this.percentWidth = this.percentHeight = 100;
    }
}
customElements.define('desktop-app', DesktopApp);
