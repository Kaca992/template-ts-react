import * as mockFetch from 'jest-fetch-mock';
import fetcher from "../../../src/utils/fetcher";
import { setupMockFetch } from '../../mock/fetch.mock';

setupMockFetch();

beforeEach(() => {
    mockFetch.mockResponse(JSON.stringify(1));
});

afterEach(() => {
    mockFetch.mockClear();
});

test('Check if fetcher executes', done => {
    fetcher.fetch('https://dog.ceo/api/breeds/image/random', { fullUrlProvided: true, jsonResponseExpected: true, requestInit: { headers: {} } }).then(result => {
        expect(result).toEqual(1);
        done();
    });
});
