import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components.
import { Grid } from '../../../../client/components/';

describe('Client :: Components :: Layout :: Grid', () => {
  const grid = shallow(
    <Grid>
      test
    </Grid>
  );

  it('Should render correctly', () => {
    expect(grid).to.have.length(1);
  });
});
