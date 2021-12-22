export async function onRequest(context) {
    return new Response("Hello, world from test!", {
        status: 200,
    });
}