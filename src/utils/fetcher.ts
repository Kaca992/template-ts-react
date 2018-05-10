import 'isomorphic-fetch';
import { appendServiceApiEndpoint } from './configOptions';

export interface ICustomFetchOptions {
    hasResult?: boolean;
}

export function fetcher(url: string, customOptions: ICustomFetchOptions, dispatch: any, init?: RequestInit): Promise<any> {
    let options: any = {
        mode: 'cors',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        ...init
    };

    let fullUrl = appendServiceApiEndpoint(url);

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
                const error = new Error(response.statusText);
                throw error;
            }
        });
}
