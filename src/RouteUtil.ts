import Model from './state/Model';

export function getAnchorFromEventTarget(target: EventTarget | null): HTMLAnchorElement | null {
    if (target instanceof HTMLAnchorElement) {
        return target;
    }
    if (target instanceof Document) {
        return null;
    }
    const targetNode: Node = target as Node;
    const parent: Node | null = targetNode.parentNode;
    return getAnchorFromEventTarget(parent);
}

export function getQueryParamsFromPath(path: string): string {
    console.log('getQueryParamsFromPath', path);
    const segments: Array<string> = path.split('/');
    if (segments.length === 5) {
        let query = '?';
        const providers = segments[1];
        const providersQuery = getProvidersQuery(providers);
        if (providersQuery) {
            query += 'with_watch_providers=' + providersQuery + '&';
        }
        const genres = segments[2];
        const genresQuery = getGenresQuery(genres);
        if (genresQuery) {
            query += 'with_genres=' + genresQuery + '&';
        }
        const sort = segments[3];
        const page = segments[4];

        console.log(query);
        return query;
        // return '? ' + providers + ' ' + genres + ' ' + sort + ' ' + page;
    }
    return '';
}

function getGenresQuery(segment: string): string {
    let query = '';
    for (const genre of Model.genres.source) {
        if (segment.indexOf(genre.slug) !== -1) {
            query += genre.id + '|'
        }
    }
    if (query) {
        return query.substring(0, query.length - 1);
    }
    return query;
}

function getProvidersQuery(segment: string): string {
    let query = '';
    for (const provider of Model.providers.source) {
        if (segment.indexOf(provider.slug) !== -1) {
            query += provider.id + '|'
        }
    }
    if (query) {
        return query.substring(0, query.length - 1);
    }
    return query;
}
