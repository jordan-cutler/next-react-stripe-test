import React from 'react';
import { render } from '../testUtils';
import Index from '../../pages/index';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />, {});
    expect(asFragment()).toMatchInlineSnapshot();
  });

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Index />, {});
  //   window.alert = jest.fn();
  //   fireEvent.click(getByText('Test Button'));
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  // });
});
