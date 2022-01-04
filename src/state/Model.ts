import { ArrayCollection, IArrayCollection } from 'enta';
import IMovie from '../dto/IMovie';
import Movie from '../dto/Movie';

export default class Model {
    private static _movies: IArrayCollection<IMovie>;
    public static get movies(): IArrayCollection<IMovie> {
        if (!this._movies) {
            const items: Array<IMovie> = [];
            for (let i = 0; i < 20; i++) {
                items.push(new Movie(i + 1, Math.random().toString()))
            }
            this._movies = new ArrayCollection(items);
        }
        return this._movies;
    }
}
