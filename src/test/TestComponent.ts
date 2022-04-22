import { Component, Display } from 'fuix';
import ITestComponent from './ITestComponent';
import TestComponentEvent from './TestComponentEvent';

export default class TestComponent extends Component implements ITestComponent {
    public constructor() {
        super();
        // console.log('t-c');
        this.style.display = Display.BLOCK;
        // this.style.fontSize = '0px';
        // this.style.wordSpacing = '0';
        this.backgroundColor = 'red';
        this.height = 400;
        this.widthPercent = 100;
        // this.setSize(300, 200); 
        this.addEventListener('click', () => {
            this.dispatchEvent(new TestComponentEvent(TestComponentEvent.TEST, 'hi!', true));
        });
    }

    public connectedCallback(): void {
        console.log('connectedCallback()');
        console.log(this.getBoundingClientRect());
    }

    public test(input: string): string {
        return input + ' World';
    }

    private _nums: 'one' | 'two' = 'one'
    public set nums(value: 'one' | 'two') {
        if (this._nums === value) {
            return;
        }
        this._nums = value;
    }

    public get nums(): 'one' | 'two' {
        return this._nums;
    }

    private _twenty = NaN;
    public set twenty(value: number) {
        this._twenty = value;
    }

    public get twenty(): number {
        return this._twenty;
    }
}
customElements.define('t-c', TestComponent);
