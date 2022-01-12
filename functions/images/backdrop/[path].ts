/* eslint-disable */
/**
 * backdrop sizes
 * w300 w780 w1280 original
 */
export async function onRequest({request, params}): Promise<Response> {
    // Cloudflare-specific options are in the cf object.
    let options = {
        cf: {
            image: {
                width: 288,
                height: 192,
                fit: 'cover',
                metadata: 'none'
            } 
        } 
    };

    /*let headers: {
        'content-type': 'image/jpeg',
        'Cache-Control': 'max-age=86400'
    }
    const accept = request.headers.get("Accept");
    if (/image\/avif/.test(accept)) {
        options.cf.image.format = 'avif';
        // @ts-ignore
        headers['content-type'] = 'image/avif';
      } else if (/image\/webp/.test(accept)) {
        options.cf.image.format = 'webp';
        // @ts-ignore
        headers['content-type'] = 'image/webp';
      }*/

    const URL = 'https://image.tmdb.org/t/p/w1280/' + params.path + '.jpg';
    /*const imageRequest = new Request(URL, {
        headers: headers
    });*/
    // @ts-ignore
    return fetch(URL, options);
}
