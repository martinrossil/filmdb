import { Container } from 'fuix';

export default class DesktopApp extends Container {
    public constructor() {
        super();
    }
}
customElements.define('desktop-app', DesktopApp);
