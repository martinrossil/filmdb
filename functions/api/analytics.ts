/* eslint-disable */
export async function onRequest({request}): Promise<Response> {
    return new Response(JSON.stringify({ 
        headers: request.headers,
        cf: request.cf
    }))
};
