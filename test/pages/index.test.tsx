import React from 'react';
import { render } from '../testUtils';
import Home from '../../pages/index';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home title="Home page" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
