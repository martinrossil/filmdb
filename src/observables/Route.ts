import IRoute from './IRoute';

export default class Route extends EventTarget implements IRoute {
    public static CHANGED = 'CHANGED';

    static #singleton: IRoute;

    public static get singleton(): IRoute {
        if (!this.#singleton) {
            this.#singleton = new Route();
        }
        return this.#singleton;
    }

    public constructor() {
        super();
        this.#route = window.location.href.toLowerCase();
        window.addEventListener('click', this.#clicked.bind(this));
        window.addEventListener('popstate', this.#popped.bind(this));
    }

    #route;

    public get route(): string {
        return this.#route;
    }

    #popped(): void {
        this.#route = window.location.href.toLowerCase();
        this.#notifyRouteChanged();
    }

    #clicked(e: Event): void {
        const anchor: HTMLAnchorElement | null = this.#getAnchorFromEventTarget(e.target);
        if (anchor) {
            e.preventDefault();
            if (window.location.href.toLowerCase() !== anchor.href) {
                this.#route = anchor.href;
                window.history.pushState(null, '', this.#route);
                this.#notifyRouteChanged();
            }
        }
    }

    #notifyRouteChanged(): void {
        this.dispatchEvent(new CustomEvent(Route.CHANGED, { detail: this.#route }));
    }

    #getAnchorFromEventTarget(target: EventTarget | null): HTMLAnchorElement | null {
        if (target instanceof HTMLAnchorElement) {
            return target;
        }
        if (target instanceof Document) {
            return null;
        }
        return this.#getParentAnchor(target as Node);
    }

    #getParentAnchor(target: Node): HTMLAnchorElement | null {
        const targetNode: Node = target;
        const parent: Node | null = targetNode.parentNode;
        return this.#getAnchorFromEventTarget(parent);
    }
}
