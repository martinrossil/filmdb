/* eslint-disable */
/**
 * backdrop sizes
 * w300 w780 w1280 original
 */
export async function onRequest({request, params}): Promise<Response> {
    
    const URL = 'https://imagedelivery.net/7G7XxXgIOc0EMphWhmzfNA/692acda2-236a-4905-b18c-1d13e55ce200/288X192';
    // const URL = 'https://image.tmdb.org/t/p/w1280/' + params.path + '.jpg';
    const imageRequest = new Request(URL, {
        headers: request.headers
    });
    return fetch(imageRequest);
}
