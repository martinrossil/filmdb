import { getMovie } from '../../Tmdb';

/* eslint-disable */
export async function onRequest(context): Promise<Response> {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data // arbitrary space for passing data between middlewares
      } = context;
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
            'content-type': 'application/json;charset=UTF-8'
        }
    });
}
