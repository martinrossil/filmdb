/* eslint-disable */
import IMoviesPage from '../../src/dto/IMoviesPage';
import { movieDiscoverPageSchemaToMoviesPage } from '../DTOSchemaAdapter';
import { discover } from '../Tmdb';

export async function onRequest({request}): Promise<Response> {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const [page, error] = await discover(search.toString());
    if (page) {
        const moviesPage: IMoviesPage = movieDiscoverPageSchemaToMoviesPage(page);
        return getResponse(JSON.stringify(moviesPage, null, 4));
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
            'Access-Control-Allow-Origin': '*',
        }
    });
}