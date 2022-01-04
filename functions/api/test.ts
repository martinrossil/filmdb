/* eslint-disable */
export async function onRequest(context): Promise<Response> {
    return new Response('Hello, world from test!', {
        status: 200
    });
}
