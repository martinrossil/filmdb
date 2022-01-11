/* eslint-disable */
import Provider from '../vo/Provider';
import Genre from '../vo/Genre';
import IMoviesPage from '../../src/dto/IMoviesPage';
import { discover } from '../Tmdb';
import { movieDiscoverPageSchemaToMoviesPage } from '../DTOSchemaAdapter';

export async function onRequest({params}): Promise<Response> {
    const segments: Array<string> = params.test;
    if (segments.length === 4) {
        let query = '';
        const providers = segments[0];
        const providersQuery = getProvidersQuery(providers);
        if (providersQuery) {
            query += 'with_watch_providers=' + providersQuery + '&';
        }
        const genres = segments[1];
        const genresQuery = getGenresQuery(genres);
        if (genresQuery) {
            query += 'with_genres=' + genresQuery + '&';
        }
        const [page, error] = await discover(query);
        if (page) {
            const moviesPage: IMoviesPage = movieDiscoverPageSchemaToMoviesPage(page);
            return getResponse(JSON.stringify(moviesPage, null, 4));
        }
        if (error) {
            return getResponse(JSON.stringify({ error: Error }, null, 4));
        }
        return getResponse(JSON.stringify(new Error('Cloud network error'), null, 4));
    }
    return getResponse(JSON.stringify(params));
}

function getResponse(body: string): Response {
    return new Response(body, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        }
    });
}

function getProvidersQuery(segment: string): string {
    let query = '';
    for (const provider of providers) {
        if (segment.indexOf(provider.slug) !== -1) {
            query += provider.id + '|'
        }
    }
    if (query) {
        return query.substring(0, query.length - 1);
    }
    return query;
}

function getGenresQuery(segment: string): string {
    let query = '';
    for (const genre of genres) {
        if (segment.indexOf(genre.slug) !== -1) {
            query += genre.id + '|'
        }
    }
    if (query) {
        return query.substring(0, query.length - 1);
    }
    return query;
}

const genres: Array<Genre> = [
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

const providers: Array<Provider> = [
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