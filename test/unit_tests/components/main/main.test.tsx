import * as React from 'react';
import { setupComponent } from './setup';
import * as mockFetch from 'jest-fetch-mock';
import { setupMockFetch } from '../../../mock/fetch.mock';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Main from '../../../../src/components/main/main';

setupMockFetch();

describe('Main Component Unit test', () => {
  test('Check if renders', () => {
    const wrapper = setupComponent().wrapper;
    expect(wrapper.exists()).toBe(true);
  });

  test('Check it renders with empty message', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    );

    expect(wrapper.find('.main').text()).toBe('Who let the dogs out?');
  });

  test('Check it renders with parameter', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/test/1']}>
        <Main />
      </MemoryRouter>
    );

    expect(wrapper.find('.main').text()).toBe('Hello 1');
  });

  test('Check if state is set', () => {
    mockFetch.mockResponseOnce(JSON.stringify({ status: '200 OK', message: 'test_dog_url' }));
    const wrapper = setupComponent().wrapper;

    setImmediate(() => {
      expect(wrapper.instance().state).toEqual({ dogUrl: 'test_dog_url' });
    });
  });

  test('Check img is rendered', () => {
    mockFetch.mockResponseOnce(JSON.stringify({ status: '200 OK', message: 'test_dog_url' }));
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    );

    setImmediate(() => {
      wrapper.update();
      expect(wrapper.find('.main__dog-img').exists()).toBe(true);
    });
  });
});
