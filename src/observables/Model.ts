import { IArrayCollection, ArrayCollection } from 'fuix';
import IMoviePreview from '../domain/IMoviePreview';
import MoviePreview from '../domain/MoviePreview';
import IModel from './IModel';

export default class Model implements IModel {
    private static _singleton: IModel;

    public static get singleton(): IModel {
        if (!this._singleton) {
            this._singleton = new Model();
        }
        return this._singleton;
    }

    private _movies!: IArrayCollection<IMoviePreview>;

    public get movies(): IArrayCollection<IMoviePreview> {
        if (!this._movies) {
            const movies: Array<IMoviePreview> = [];
            for (let i = 0; i < 60; i += 1) {
                movies.push(new MoviePreview({ uid: i }));
            }
            this._movies = new ArrayCollection(movies);
        }
        return this._movies;
    }
}
