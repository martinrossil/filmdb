/* eslint-disable */
export async function onRequest({request}): Promise<Response> {
    return new Response(JSON.stringify({ 
        headers: {
            ua: request.headers.get('user-agent'),
            cfConnectingIP: request.headers.get('cf-connecting-ip'),
            cfIPCountry: request.headers.get('cf-ipcountry'),
            cfRay: request.headers.get('cf-ray')
        },
        cf: request.cf
    }))
};
