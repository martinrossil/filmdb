import IMoviePreview from './IMoviePreview';

export default class MoviePreview implements IMoviePreview {
    public constructor({ uid }: IMoviePreview) {
        this.uid = uid;
    }

    public uid: number;
}
