import IMovie from '../shared/IMovie';
import Movie from '../shared/Movie';
import { TMDB_BASE_URL, TMDB_TOKEN } from './Config';

export async function getMovie(id: number): Promise<[IMovie | null, Error | null]> {
    const url = TMDB_BASE_URL + '/movie/' + id + '?language=da&include_adult=false';
    try {
        const movieResponse = await fetch(url, requestInit());
        const movieJson = await movieResponse.json();
        if (movieResponse.ok) {
            return [new Movie(movieJson), null];
        }
        return [null, new Error(movieJson.status_message)];
    } catch (error) {
        const typeError: TypeError = error as TypeError;
        return [null, new Error(typeError.message)];
    }
}

function requestInit(): Record<string, string | Record<string, string> | Headers | string[][]> {
    return {
        method: 'GET',
        headers: this.headersInit
    }
}

function headersInit(): Headers | string[][] | Record<string, string> {
    return {
        Authorization: 'Bearer ' + TMDB_TOKEN,
        'Content-Type': 'application/json;charset=utf-8'
    }
}