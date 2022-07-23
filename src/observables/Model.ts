import { IArrayCollection, ArrayCollection } from 'fuix';
import IMoviePreview from '../domain/IMoviePreview';
import MoviePreview from '../domain/MoviePreview';
import IModel from './IModel';

export default class Model implements IModel {
    static #singleton: IModel;

    public static get singleton(): IModel {
        if (!this.#singleton) {
            this.#singleton = new Model();
        }
        return this.#singleton;
    }

    #movies!: IArrayCollection<IMoviePreview>;

    public get movies(): IArrayCollection<IMoviePreview> {
        if (!this.#movies) {
            const movies: Array<IMoviePreview> = [];
            for (let i = 0; i < 60; i += 1) {
                movies.push(new MoviePreview({ uid: i }));
            }
            this.#movies = new ArrayCollection(movies);
        }
        return this.#movies;
    }
}
