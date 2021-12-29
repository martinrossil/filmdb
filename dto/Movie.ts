import IMovie from './IMovie';

export default class Movie implements IMovie {
    public id: number;
    public title: string;
    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}