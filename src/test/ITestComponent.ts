import { IComponent } from 'fuix';

export default interface ITestComponent extends IComponent {
    test(input: string): string;
    twenty: number;
    nums: 'one' | 'two';
}