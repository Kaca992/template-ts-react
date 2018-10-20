import * as React from 'react';
import { shallow } from 'enzyme';
import Main from '@components/main/main';
import * as mockFetch from 'jest-fetch-mock';
import { setupMockFetch } from '../setup';
import fetcher from '../../src/utils/fetcher';

setupMockFetch();

beforeEach(() => {
  mockFetch.mockResponse(JSON.stringify(1));
});

afterEach(() => {
  mockFetch.mockClear();
});

test('Check if img element is defined', done => {
  const main = shallow(<Main />);

  fetcher.fetch('https://dog.ceo/api/breeds/image/random', { fullUrlProvided: true, jsonResponseExpected: true, requestInit: { headers: {} } }).then(result => {
    expect(result).toBeDefined();
    done();
  });

  expect(main.find('img')).toBeDefined();
});
