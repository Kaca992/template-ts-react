import * as React from 'react';
import { shallow } from 'enzyme';
import Main from '@components/main/main';
import { fetcher } from '../../src/utils/fetcher';

test('Check if img element is defined', done => {
  const main = shallow(<Main />);

  fetcher('https://dog.ceo/api/breeds/image/random', { fullUrlProvided: true, hasResult: true }, null, { headers: {} }).then(result => {
    expect(result).toBeDefined();
    done();
  });

  expect(main.find('img')).toBeDefined();
});
