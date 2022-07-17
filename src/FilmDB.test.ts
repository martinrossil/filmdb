import { assert } from 'chai';
import FilmDB from './FilmDB';

describe('FilmDB', () => {
    describe('default body styles', () => {
        it('computed body backgroundColor should be "rgb(244, 245, 247)"', () => {
            const filmDB: FilmDB = new FilmDB();
            document.body.appendChild(filmDB);
            const computed = window.getComputedStyle(document.body);
            assert.strictEqual(computed.backgroundColor, 'rgb(244, 245, 247)');
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
    describe('TopBar', () => {
        describe('TopBar position', () => {
            it('topBar x and y should be 0', () => {
                const filmDB = new FilmDB();
                document.body.appendChild(filmDB);
                const topBarRect = filmDB.topBar.getBoundingClientRect();
                assert.strictEqual(topBarRect.x, 0);
                assert.strictEqual(topBarRect.y, 0);
                document.body.removeChild(filmDB);
            });
        });
        describe('TopBar width', () => {
            it('topBar width should be ' + window.innerWidth + 'px', () => {
                const filmDB = new FilmDB();
                document.body.appendChild(filmDB);
                const topBarRect = filmDB.topBar.getBoundingClientRect();
                assert.strictEqual(topBarRect.width, window.innerWidth);
                document.body.removeChild(filmDB);
            });
        });
    });
    describe('BottomNavigation', () => {
        it('bottomNavigation x should be 0', () => {
            const filmDB = new FilmDB();
            document.body.appendChild(filmDB);
            const bottomNavigationRect = filmDB.bottomNavigation.getBoundingClientRect();
            assert.strictEqual(bottomNavigationRect.x, 0);
            document.body.removeChild(filmDB);
        });
        it('bottomNavigation y should be (window.innerHeight - bottomNavigation.height)', () => {
            const filmDB = new FilmDB();
            document.body.appendChild(filmDB);
            const bottomNavigationY = window.innerHeight - filmDB.bottomNavigation.height;
            const bottomNavigationRect = filmDB.bottomNavigation.getBoundingClientRect();
            assert.strictEqual(bottomNavigationRect.y, bottomNavigationY);
            document.body.removeChild(filmDB);
        });
    });
});
