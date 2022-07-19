export default interface IDevice extends EventTarget {
    readonly device: 'mobile' | 'tablet' | 'laptop' | 'desktop';
}
