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
    const URL = 'https://image.tmdb.org/t/p/w780/';
    const path: string = params.path;
    return fetch(URL + path);
}
