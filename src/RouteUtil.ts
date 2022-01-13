import Model from './state/Model';

export function getAnchorFromEventTarget(target: EventTarget | null): HTMLAnchorElement | null {
    if (target instanceof HTMLAnchorElement) {
        return target;
    }
    if (target instanceof Document) {
        return null;
    }
    const targetNode: Node = target as Node;
    const parent: Node | null = targetNode.parentNode;
    return getAnchorFromEventTarget(parent);
}
