/* eslint-disable */
import IMoviesPage from '../../src/dto/IMoviesPage';
import { movieDiscoverPageSchemaToMoviesPage } from '../DTOSchemaAdapter';
import { getQueryString } from '../QueryUtil';
import { discover } from '../Tmdb';

export async function onRequest({ params, env }): Promise<Response> {
    const TEST = env.TEST;
    if (params.path) {
        const segments: Array<string> = params.path;
        if (segments.length === 4) {
            const key: string = segments.join('/');
            const value: string | null = await TEST.get(key);
            if (value !== null) {
                return getResponse(value);
            }
            const queryString = getQueryString(segments[0], segments[1], segments[3], segments[4]);
            return await getDicover(queryString, key, TEST);
        }
        return await getDicover('', '/', TEST);
    }
    const value: string | null = await TEST.get('/');
    if (value !== null) {
        return getResponse(value);
    }
    return await getDicover('', '/', TEST);
}

async function getDicover(query: string, key: string, TEST): Promise<Response> {
    const [page, error] = await discover(query);
        if (page) {
            const moviesPage: IMoviesPage = movieDiscoverPageSchemaToMoviesPage(page);
            const moviesPageString = JSON.stringify(moviesPage, null, 4);
            const ONE_DAY = 60 * 60 * 24;
            await TEST.put(key, moviesPageString, { expirationTtl: ONE_DAY })
            return getResponse(moviesPageString);
        }
        if (error) {
            return getResponse(JSON.stringify({ error: Error }, null, 4));
        }
        return getResponse(JSON.stringify(new Error('Cloud network error'), null, 4));
}

function getResponse(body: string): Response {
    return new Response(body, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Cache-Control': 'public, max-age=86400',
            'Access-Control-Allow-Origin': '*'
        }
    });
}
