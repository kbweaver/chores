import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ChoreListComponent from './ChoreListComponent';

describe('<ChoreListComponent />', () => {
  it('renders a <Chore> for each chore', () => {
    const chores = [
      {
        name: 'foo',
        id: 1,
      },
    ];
    const wrapper = shallow(<ChoreListComponent chores={chores} deleteChore={() => {}}/>);
    expect(wrapper.find('Chore')).to.have.length(chores.length);
  });
});
