import { assert } from 'chai';
import FilmDB from '../src/FilmDB';

describe('FilmDB', () => {
    describe('default body styles', () => {
        it('computed body backgroundColor should be "rgb(16, 19, 35)"', () => {
            const filmDB: FilmDB = new FilmDB();
            document.body.appendChild(filmDB);
            const computed = window.getComputedStyle(document.body);
            assert.strictEqual(computed.backgroundColor, 'rgb(16, 19, 35)');
            document.body.removeChild(filmDB);
        });
        it('computed body fontFamily should be "Inter"', () => {
            const filmDB: FilmDB = new FilmDB();
            document.body.appendChild(filmDB);
            const computed = window.getComputedStyle(document.body);
            assert.strictEqual(computed.fontFamily, 'Inter');
            document.body.removeChild(filmDB);
        });
    });
});
