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
    let response = JSON.stringify(request, null, 4);
    return new Response(response, {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
