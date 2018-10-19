import * as React from 'react';
import { shallow } from 'enzyme';
import Main from '@components/main/main';
import fetcher from '../../src/utils/fetcher';
import * as mockFetch from 'jest-fetch-mock';

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
