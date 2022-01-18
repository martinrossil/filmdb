/* eslint-disable */
// import { ImageSchema } from '../../../schema/ImageSchema';
// import { getMovieImages } from '../../../Tmdb';

 export async function onRequest({params, env}): Promise<Response> {
    const BASE_URL = 'https://image.tmdb.org/t/p/w300/';
    const uid: string = params.uid;
    try {
        const BACKDROP_PATHS = env.BACKDROP_PATHS;
        const path: string | null = await BACKDROP_PATHS.get(uid);
        return getResponse(JSON.stringify({ path }));
    } catch(error) {
        return getResponse(JSON.stringify(error.message));
    }
    
    /* 
    if (path) {
        const URL = BASE_URL + path;
        return fetch(URL);
    }
    const id = parseInt(uid, 16);
    const test = { id };
    return getResponse(JSON.stringify(test)); */
    /* const [movieImages, error] = await getMovieImages(id);
    if (movieImages) {
        if (movieImages.backdrops.length) {
            const backdrop: ImageSchema = movieImages.backdrops[0];
            const path = backdrop.file_path;
            const ONE_DAY = 60 * 60 * 24;
            await BACKDROP_PATHS.put(uid, path, { expirationTtl: ONE_DAY })
            const URL = BASE_URL + path;
            return fetch(URL);
        }
    }
    if (error) {
        return getResponse(JSON.stringify({ error: Error }, null, 4));
    }
    return getResponse(JSON.stringify(new Error('Cloud network error'), null, 4)); */
}

function getResponse(body: string): Response {
    return new Response(body, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Cache-Control': 'public, max-age=86400',
            'Access-Control-Allow-Origin': '*'
        }
    });
}