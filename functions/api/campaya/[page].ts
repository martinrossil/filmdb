/* eslint-disable */
const URL = 'https://www.campaya.dk/service/search/GetPartialSearchResult?AreaId=25&ThemeId=0&SearchId=0&PageNumber=';

export async function onRequest({params}): Promise<Response> {
    const page: number = params.page;
    let html = '';
    try {
        const response = await fetch(URL + page, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
              }
        });
        if (response.ok) {
            html = await response.text();
        } else {
            html = 'response not ok';
        }
    } catch (error) {
        html = 'error' + error.message;
    }
    return new Response(html, {
        headers: {
            'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
        }
    });
}
