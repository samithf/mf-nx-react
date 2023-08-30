import { render } from '@testing-library/react';

import CreateBanner from './create-banner';

describe('CreateBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateBanner />);
    expect(baseElement).toBeTruthy();
  });
});
