import IMovie from './IMovie';

export default class Movie implements IMovie {
    public backdrop: string | null = null;
    public title = '';
}
