import ITest from '../shared/ITest'
import Test from '../shared/Test'

export function getMovie(id: number): ITest {
    return new Test(id, 'test name');
}
