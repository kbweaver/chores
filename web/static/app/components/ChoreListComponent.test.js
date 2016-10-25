import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ChoreListComponent from './ChoreListComponent';

describe('<ChoreListComponent />', () => {
  it('renders a <Chore> for each chore', () => {
    const chores = [
      {
        name: 'foo',
      },
    ];
    const wrapper = shallow(<ChoreListComponent chores={chores}/>);
    expect(wrapper.find('Chore')).to.have.length(chores.length);
  });
});
