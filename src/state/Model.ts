import { ArrayCollection, IArrayCollection } from 'enta';
import IMovie from '../dto/IMovie';
import ILink from '../vo/ILink';
import Link from '../vo/Link';
import OberservableString from './ObservableString';

export default class Model {
    private static _device: OberservableString;
    public static get device(): OberservableString {
        if (!this._device) {
            this._device = new OberservableString();
        }
        return this._device;
    }

    private static _movies: IArrayCollection<IMovie>;
    public static get movies(): IArrayCollection<IMovie> {
        if (!this._movies) {
            this._movies = new ArrayCollection();
        }
        return this._movies;
    }

    private static _genres: IArrayCollection<ILink>;
    public static get genres(): IArrayCollection<ILink> {
        if (!this._genres) {
            const genres: Array<ILink> = [
                new Link('Action', 'b', '/a/b/a/1'),
                new Link('Animation', 'c', '/a/c/a/1'),
                new Link('Dokumentar', 'd', '/a/d/a/1'),
                new Link('Drama', 'e', '/a/e/a/1'),
                new Link('Eventyr', 'f', '/a/f/a/1'),
                new Link('Familie', 'g', '/a/g/a/1'),
                new Link('Fantasy', 'h', '/a/h/a/1'),
                new Link('Gyser', 'i', '/a/i/a/1'),
                new Link('Historie', 'j', '/a/j/a/1'),
                new Link('Komedie', 'k', '/a/k/a/1'),
                new Link('Krig', 'l', '/a/l/a/1'),
                new Link('Krimi', 'm', '/a/m/a/1'),
                new Link('Musik', 'n', '/a/n/a/1'),
                new Link('Mysterie', 'o', '/a/o/a/1'),
                new Link('Romantik', 'p', '/a/p/a/1')
            ];
            this._genres = new ArrayCollection(genres);
        }
        return this._genres;
    }

    private static _providers: IArrayCollection<ILink>;
    public static get providers(): IArrayCollection<ILink> {
        if (!this._providers) {
            const providers: Array<ILink> = [
                new Link('Amazon Prime', 'b', '/b/a/a/1'),
                new Link('Apple Itunes', 'c', '/c/a/a/1'),
                new Link('Apple TV+', 'd', '/d/a/a/1'),
                new Link('Blockbuster', 'e', '/e/a/a/1'),
                new Link('C More', 'f', '/f/a/a/1'),
                new Link('Dansk Filmskat', 'g', '/g/a/a/1'),
                new Link('Disney+', 'h', '/h/a/a/1'),
                new Link('DR TV', 'i', '/i/a/a/1'),
                new Link('Filmstriben', 'j', '/j/a/a/1'),
                new Link('HBO Max', 'k', '/k/a/a/1'),
                new Link('Netflix', 'l', '/l/a/a/1'),
                new Link('Paramount+', 'm', '/m/a/a/1'),
                new Link('SF Anytime', 'n', '/n/a/a/1'),
                new Link('TV2 Play', 'o', '/o/a/a/1'),
                new Link('Viaplay', 'p', '/p/a/a/1')
            ];
            this._providers = new ArrayCollection(providers);
        }
        return this._providers;
    }
}
