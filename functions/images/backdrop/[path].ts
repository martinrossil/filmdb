/* eslint-disable */
export async function onRequest({params}): Promise<Response> {
    const URL = 'https://image.tmdb.org/t/p/w300/';
    const path: string = params.path;
    return fetch(URL + path);
}
