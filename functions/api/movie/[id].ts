/* eslint-disable */
import { getMovie } from '../../Tmdb';

export async function onRequest({params}): Promise<Response> {
    const id: number = parseInt(params.id);
    const [movie, error] = await getMovie(id);
    let response = '[null, null]';
    
    if (movie) {
        response = JSON.stringify(movie, null, 4);
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
