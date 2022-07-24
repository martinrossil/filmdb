import IRoute from './IRoute';

export default class Route extends EventTarget implements IRoute {
    public static CHANGED = 'CHANGED';

    private static _singleton: IRoute;

    public static get singleton(): IRoute {
        if (!this._singleton) {
            this._singleton = new Route();
        }
        return this._singleton;
    }

    public constructor() {
        super();
        this._route = window.location.href.toLowerCase();
        window.addEventListener('click', this.clicked.bind(this));
        window.addEventListener('popstate', this.popped.bind(this));
    }

    _route;

    public get route(): string {
        return this._route;
    }

    private popped(): void {
        this._route = window.location.href.toLowerCase();
        this.notifyRouteChanged();
    }

    private clicked(e: Event): void {
        const anchor: HTMLAnchorElement | null = this.getAnchorFromEventTarget(e.target);
        if (anchor) {
            e.preventDefault();
            if (window.location.href.toLowerCase() !== anchor.href) {
                this._route = anchor.href;
                window.history.pushState(null, '', this._route);
                this.notifyRouteChanged();
            }
        }
    }

    private notifyRouteChanged(): void {
        this.dispatchEvent(new CustomEvent(Route.CHANGED, { detail: this._route }));
    }

    private getAnchorFromEventTarget(target: EventTarget | null): HTMLAnchorElement | null {
        if (target instanceof HTMLAnchorElement) {
            return target;
        }
        if (target instanceof Document) {
            return null;
        }
        return this.getParentAnchor(target as Node);
    }

    private getParentAnchor(target: Node): HTMLAnchorElement | null {
        const targetNode: Node = target;
        const parent: Node | null = targetNode.parentNode;
        return this.getAnchorFromEventTarget(parent);
    }
}
