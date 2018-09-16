import { appendServiceApiEndpoint } from '@common/config/service.config';
import 'isomorphic-fetch';

export interface ICustomFetchOptions {
    action?: string;
    requestActionPayload?: any;
    hasResult?: boolean;
    responseActionPayloadMapper?(responsePayload): any;
}

export function fetcher(url: string, customOptions: ICustomFetchOptions, dispatch: any, init?: RequestInit): Promise<any> {
    const options: any = {
        mode: 'cors',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        ...init
    };

    const fullUrl = appendServiceApiEndpoint(url);

    const { action, requestActionPayload, responseActionPayloadMapper } = customOptions;

    if (action !== undefined) {
        dispatch({
            type: actionUtils.requestAction(action),
            payload: requestActionPayload
        });
    }

    return fetch(fullUrl, options)
        .then(response => {
            if (response.ok) {
                if (customOptions.hasResult) {
                    return response.json().then(jsonResponse => {
                        if (action !== undefined) {
                            dispatch({
                                type: actionUtils.responseAction(action),
                                payload: responseActionPayloadMapper ? responseActionPayloadMapper(jsonResponse) : jsonResponse
                            });
                        }

                        return Promise.resolve(responseActionPayloadMapper ? responseActionPayloadMapper(jsonResponse) : jsonResponse);
                    });
                }

                if (action !== undefined) {
                    dispatch({
                        type: actionUtils.responseAction(action),
                        payload: null
                    });
                }

                return Promise.resolve();
            } else {
                let payload = { status: response.status, body: null };
                response.json()
                    .then(errorResponse => {
                        payload = { ...payload, body: errorResponse };
                    }).catch();

                if (action !== undefined) {
                    dispatch({
                        type: actionUtils.errorAction(action),
                        payload
                    });
                } else {
                    throw payload;
                }
            }
        }).catch(error => {
            if (action !== undefined) {
                dispatch({
                    type: actionUtils.errorAction(action),
                    payload: error
                });
            }

            throw error;
        });
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
    },
};
