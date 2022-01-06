import { TMDB_BASE_URL, TMDB_TOKEN } from './Config';
import IMovie from '../src/dto/IMovie';

export async function discover(query: string): Promise<[unknown | null, Error | null]> {
    const url = TMDB_BASE_URL + '/discover/movie?' + query + '&language=da-DK&region=dk&include_adult=false';
    try {
        const response = await fetch(url, requestInit());
        const json = await response.json();
        if (response.ok) {
            return [json, null];
        }
        return [null, new Error()];
    } catch (error) {
        const typeError: TypeError = error as TypeError;
        return [null, new Error(typeError.message)];
    }
}

export async function getMovie(id: number): Promise<[IMovie | null, Error | null]> {
    const url = TMDB_BASE_URL + '/movie/' + id + '?language=da&region=dk&include_adult=false';
    try {
        const response = await fetch(url, requestInit());
        const json: IMovie = await response.json();
        if (response.ok) {
            return [json, null];
        }
        return [null, new Error()];
    } catch (error) {
        const typeError: TypeError = error as TypeError;
        return [null, new Error(typeError.message)];
    }
}

function requestInit(): Record<string, string | Record<string, string> | Headers | string[][]> {
    return {
        method: 'GET',
        headers: headersInit()
    }
}

function headersInit(): Headers | string[][] | Record<string, string> {
    return {
        Authorization: 'Bearer ' + TMDB_TOKEN,
        'Content-Type': 'application/json;charset=utf-8'
    }
}
