import { ArrayCollection, IArrayCollection } from 'enta';
import IMovie from '../dto/IMovie';
import Genre from '../vo/Genre';
import IGenre from '../vo/IGenre';
import IProvider from '../vo/IProvider';
import Provider from '../vo/Provider';

export default class Model {
    private static _movies: IArrayCollection<IMovie>;
    public static get movies(): IArrayCollection<IMovie> {
        if (!this._movies) {
            this._movies = new ArrayCollection();
        }
        return this._movies;
    }

    private static _genres: IArrayCollection<IGenre>;
    public static get genres(): IArrayCollection<IGenre> {
        if (!this._genres) {
            const genres: Array<IGenre> = [
                new Genre('Action', 28, 'b'),
                new Genre('Animation', 16, 'c'),
                new Genre('Dokumentar', 99, 'd'),
                new Genre('Drama', 18, 'e'),
                new Genre('Eventyr', 12, 'f'),
                new Genre('Familie', 10751, 'g'),
                new Genre('Fantasy', 14, 'h'),
                new Genre('Gyser', 27, 'i'),
                new Genre('Historie', 36, 'j'),
                new Genre('Komedie', 35, 'k'),
                new Genre('Krig', 10752, 'l'),
                new Genre('Krimi', 80, 'm'),
                new Genre('Musik', 10402, 'n'),
                new Genre('Mysterie', 9648, 'o'),
                new Genre('Romantik', 10749, 'p')
            ];
            this._genres = new ArrayCollection(genres);
        }
        return this._genres;
    }

    private static _providers: IArrayCollection<IProvider>;
    public static get providers(): IArrayCollection<IProvider> {
        if (!this._providers) {
            const providers: Array<IProvider> = [
                new Provider('Amazon Prime', 119, 'b'),
                new Provider('Apple Itunes', 2, 'c'),
                new Provider('Apple TV+', 350, 'd'),
                new Provider('Blockbuster', 423, 'e'),
                new Provider('C More', 77, 'f'),
                new Provider('Dansk Filmskat', 621, 'g'),
                new Provider('Disney+', 337, 'h'),
                new Provider('DR TV', 620, 'i'),
                new Provider('Filmstriben', 443, 'j'),
                new Provider('HBO Max', 384, 'k'),
                new Provider('Netflix', 8, 'l'),
                new Provider('Paramount+', 531, 'm'),
                new Provider('SF Anytime', 426, 'n'),
                new Provider('TV2 Play', 383, 'o'),
                new Provider('Viaplay', 76, 'p')
            ];
            this._providers = new ArrayCollection(providers);
        }
        return this._providers;
    }
}
