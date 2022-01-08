import { ArrayCollection, IArrayCollection } from 'enta';
import IMovie from '../dto/IMovie';

export default class Model {
    private static _movies: IArrayCollection<IMovie>;
    public static get movies(): IArrayCollection<IMovie> {
        if (!this._movies) {
            this._movies = new ArrayCollection();
        }
        return this._movies;
    }
}
