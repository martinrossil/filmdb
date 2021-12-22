import IMovie from './IMovie';

export default class Movie implements IMovie {
    public id: number;
    public title: string;
    public constructor({id, title}) {
        this.id = id;
        this.title = title;
    }
}