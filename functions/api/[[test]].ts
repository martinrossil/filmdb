/* eslint-disable */
export async function onRequest({params}): Promise<Response> {
    const pathArray: Array<string> = params.test;
    let response = JSON.stringify(params);
    return new Response(response);
}
