import { DisplayContainer, IMouseTouch, MouseTouchMachine } from 'enta';
import Colors from '../theme/Colors';

export default class CircleButton extends DisplayContainer implements IMouseTouch {
    private event: string;
    public constructor(event: string) {
        super();
        this.event = event;
        this.name = 'CircleButton';
        this.size(40, 40);
        this.backgroundColor = Colors.BLUE;
        this.cornerSize = 20;
    }

    public initial(e: Event): void {
        console.log('initial', e.type);
    }

    public hover(): void {
        console.log('hover');
    }

    public pressed(x: number, y: number): void {
        console.log('pressed', x, y);
    }

    public clicked(): void {
        console.log('clicked');
        this.dispatchEvent(new CustomEvent(this.event, { bubbles: true }))
    }

    private _mouseTouchMachine: MouseTouchMachine = new MouseTouchMachine(this);
}
customElements.define('circle-button', CircleButton);
