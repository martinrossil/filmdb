/* eslint-disable */
export async function onRequest({request}): Promise<Response> {
    const headers = [];
    request.headers.forEach((value, key) => {
        headers.push({ key, value });
    });
    return new Response(JSON.stringify({ 
        headers,
        /*headers: {
            ua: request.headers.get('user-agent'),
            cfConnectingIP: request.headers.get('cf-connecting-ip'),
            cfIPCountry: request.headers.get('cf-ipcountry'),
            cfRay: request.headers.get('cf-ray')
        },*/
        cf: request.cf
    }))
};
