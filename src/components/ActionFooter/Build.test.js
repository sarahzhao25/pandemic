import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Build, mapStateToProps } from './Build';
import { dummyState } from '../../utils';
Enzyme.configure({ adapter: new Adapter() });

describe('Build', () => {
  it('receives correct props from mapStateToProps', () => {
    const expectedProps = {
      currentTurn: 1,
      buildDisabled: false,
      currentCity: '',
      unusedCityCards: [],
      sameColorCityCards: []
    };
    expect(Object.keys(mapStateToProps(dummyState)).sort()).toEqual(Object.keys(expectedProps).sort());
  });

  describe('renders a Choose Card Modal', () => {

    const component = shallow(<Build />);

    it('ChooseCardModal', () => {
      expect(component.find('ChooseCardModal').name()).toBe('ChooseCardModal');
    });

    it('that takes in the correct props', () => {
      const expectedProps = {
        ModalTrigger: {},
        disabled: false,
        cards: [],
        action: ()=>{}
      };
      expect(Object.keys(component.props()).sort()).toEqual(Object.keys(expectedProps).sort());
    });
  });
});
