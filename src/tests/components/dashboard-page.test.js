import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/dashboard-page';

test('render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
