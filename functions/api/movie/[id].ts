import ITest from '../../../shared/ITest';
import Test from '../../../shared/Test';
import { getMovie } from '../../Tmdb';

export async function onRequest(context) {
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
      } = context;
    const id: number = parseInt(params.id);
    const test: ITest = getMovie(id);
    return new Response(JSON.stringify(test, null, 4), {
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });
}