import { ArrayCollection, IArrayCollection } from 'enta';
import { MovieDiscoverSchema } from '../schema/MovieDiscoverSchema';

export default class Model {
    private static _movies: IArrayCollection<MovieDiscoverSchema>;
    public static get movies(): IArrayCollection<MovieDiscoverSchema> {
        if (!this._movies) {
            this._movies = new ArrayCollection();
        }
        return this._movies;
    }
}
