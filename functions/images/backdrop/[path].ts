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
                metadata: 'none',
                format: ''
            } 
        } 
    };
    const accept = request.headers.get("Accept");
    if (/image\/avif/.test(accept)) {
        options.cf.image.format = 'avif';
      } else if (/image\/webp/.test(accept)) {
        options.cf.image.format = 'webp';
      }

    const URL = 'https://image.tmdb.org/t/p/w1280/' + params.path + '.jpg';
    
    // @ts-ignore
    return fetch(URL, options);
}
