/* eslint-disable camelcase */
import { MovieDiscoverSchema } from './MovieDiscoverSchema';

export type MovieDiscoverPageSchema = {
    page: number,
    results: Array<MovieDiscoverSchema>,
    total_result: number,
    total_pages: number
}
