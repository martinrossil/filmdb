/* eslint-disable */
const URL = 'https://www.campaya.dk/service/search/GetPartialSearchResult?AreaId=25&ThemeId=0&SearchId=0&PageNumber=';

export async function onRequest({params}): Promise<Response> {
    const page: number = params.page;
    try {
        return fetch(URL + page, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
              }
        });
    } catch (error) {
        return new Response('error');
    }
}
