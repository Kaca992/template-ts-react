import 'isomorphic-fetch';
import { appendServiceApiEndpoint } from '../common/config/service.config';

export interface BasicFetchOptions {
    jsonResponseExpected?: boolean;
    requestInit?: RequestInit;
    /** Use when you don't want to append the service api endpoint */
    fullUrlProvided?: boolean;
    responseActionPayloadMapper?(responsePayload: any): any;
}

export interface ReduxFetchOptions extends BasicFetchOptions {
    action: string;
    requestActionPayload?: any;
}

export class Fetcher {
    private readonly init: RequestInit = {
        mode: 'cors',
        method: 'GET',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    public fetch = async (url: string, fetchOptions: BasicFetchOptions) => {
        const fullUrl = fetchOptions.fullUrlProvided ? url : appendServiceApiEndpoint(url);
        const options = { ...fetchOptions };
        const newInit: RequestInit = {
            ...this.init,
            ...options.requestInit
        };

        return Promise.resolve(this.fetchImplementation(fullUrl, newInit, options));
    };

    public reduxFetch = async (url: string, reduxFetchOptions: ReduxFetchOptions, dispatch: any) => {
        dispatch({
            type: actionUtils.requestAction(reduxFetchOptions.action),
            payload: reduxFetchOptions.requestActionPayload
        });

        return this.fetch(url, reduxFetchOptions)
            .then(async result => {
                dispatch({
                    type: actionUtils.responseAction(reduxFetchOptions.action),
                    payload: result
                });

                return Promise.resolve(result);
            })
            .catch(error => {
                dispatch({
                    type: actionUtils.errorAction(reduxFetchOptions.action),
                    payload: error
                });

                throw error;
            });
    };

    private fetchImplementation = async (fullUrl: string, newInit: RequestInit, options: BasicFetchOptions) => {
        return fetch(fullUrl, newInit).then(async response => {
            if (response.ok) {
                if (options.jsonResponseExpected) {
                    return response.json().then(async jsonResponse => {
                        return Promise.resolve(
                            options.responseActionPayloadMapper ? options.responseActionPayloadMapper(jsonResponse) : jsonResponse
                        );
                    });
                }

                return Promise.resolve();
            }
            {
                let payload = { status: response.status, body: null };
                return response
                    .json()
                    .then(async errorResponse => {
                        payload = { ...payload, body: errorResponse };
                        return Promise.reject(payload);
                    })
                    .catch(err => Promise.reject(payload));
            }
        });
    };
}

export const actionUtils = {
    requestAction(action: string): string {
        return `${action}_REQUEST`;
    },

    responseAction(action: string): string {
        return `${action}_RESPONSE`;
    },

    errorAction(action: string): string {
        return `${action}_ERROR`;
    }
};

const fetcher = new Fetcher();
export default fetcher;
