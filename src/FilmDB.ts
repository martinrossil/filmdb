import { Application, Display } from 'fuix';
import IEventListener from 'fuix/lib/event/IEventListener';
import TestComponent from './test/TestComponent';
import TestComponentEvent from './test/TestComponentEvent';

export default class FilmDB extends Application {
    public constructor() {
        super();
        console.log('FilmDB()');
        this.display = Display.FLEX;
        this.style.flexDirection = 'column';
        this.addComponents([new TestComponent(), new TestComponent(), new TestComponent(), new TestComponent()]);
        this.addEventListener(TestComponentEvent.TEST, this.testClicked as IEventListener);
    }

    private testClicked(e: TestComponentEvent): void {
        console.log(this, e.type, e.prop);
    }
}
customElements.define('film-db', FilmDB);
