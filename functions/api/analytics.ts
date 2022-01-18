/* eslint-disable */
export async function onRequest({request}): Promise<Response> {
    return new Response(JSON.stringify({ 
        headers: {
            ua: request.headers.get('User-Agent'),
            cip: request.headers.get('cf-connecting-ip'),
            ipc: request.headers.get('cf-ipcountry')
        },
        cf: request.cf
    }))
};
