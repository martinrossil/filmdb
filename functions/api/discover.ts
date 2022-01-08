/* eslint-disable */
import { discover } from '../Tmdb';

export async function onRequest({request}): Promise<Response> {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const [page, error] = await discover(search.toString());
    let response = '[null, null]';
    
    if (page) {
        response = JSON.stringify(page, null, 4);
    }
    if (error) {
        response = JSON.stringify({ error: Error }, null, 4);
    }
    
    return new Response(response, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        }
    });
}
