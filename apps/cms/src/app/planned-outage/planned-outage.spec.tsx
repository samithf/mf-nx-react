import { render } from '@testing-library/react';

import PlannedOutage from './planned-outage';

describe('PlannedOutage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlannedOutage />);
    expect(baseElement).toBeTruthy();
  });
});
