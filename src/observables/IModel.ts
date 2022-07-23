import { IArrayCollection } from 'fuix';
import IMoviePreview from '../domain/IMoviePreview';

export default interface IModel {
    readonly movies: IArrayCollection<IMoviePreview>;
}
