/* eslint-disable */
/**
 * backdrop sizes
 * w300 w780 w1280 original
 */
export async function onRequest({params}): Promise<Response> {
    const URL = 'https://image.tmdb.org/t/p/w300/';
    const path: string = params.path;
    return fetch(URL + path);
}
