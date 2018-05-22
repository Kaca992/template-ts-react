import 'isomorphic-fetch';
import { appendServiceApiEndpoint } from './configOptions';

export interface ICustomFetchOptions {
    hasResult?: boolean;
}

export function fetcher(url: string, customOptions: ICustomFetchOptions, init?: RequestInit): Promise<any> {
    const options: any = {
        mode: 'cors',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        ...init
    };

    const fullUrl = appendServiceApiEndpoint(url);

    return fetch(fullUrl, options)
        .then(response => {
            if (response.ok) {
                if (customOptions.hasResult) {
                    return response.json().then(jsonResponse => {
                        return Promise.resolve(jsonResponse);
                    });
                }

                return Promise.resolve();
            } else {
                let payload = { status: response.status, body: null };
                return response.json().then(errorResponse => {
                    payload = { ...payload, body: errorResponse };
                }).then(resp => {
                    throw payload;
                }).catch(err => { throw payload; });
            }
        });
}
