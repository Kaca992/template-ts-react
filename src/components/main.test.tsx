import { render } from '@testing-library/react';
import React from 'react';
import Main from './main';

test('Example test', () => {
    const { getByText } = render(<Main />);
    getByText('Template App');
});
