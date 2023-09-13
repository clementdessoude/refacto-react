import React from 'react';
import { shallow } from 'enzyme';
import MultipleSelect from "./MultipleSelect.component";
describe('components', () => {
  describe('MultipleSelect', () => {
    it('empty case', () => {
      const wrapper = shallow(<MultipleSelect selectValues={{}} />);

      expect(wrapper.find('select')).toHaveLength(0);
    })

    it('one empty select case', () => {
      const wrapper = shallow(<MultipleSelect selectValues={{select1: []}} />);

      expect(wrapper.find('select')).toHaveLength(1);
      expect(wrapper.find('option')).toHaveLength(0);
    })

    it('one select case', () => {
      const wrapper = shallow(<MultipleSelect selectValues={{select1: ['a', 'b']}} />);

      expect(wrapper.find('select')).toHaveLength(1);
      expect(wrapper.find('option')).toHaveLength(2);
    })

    it('many selects case', () => {
      const wrapper = shallow(
        <MultipleSelect selectValues={{select1: ['a', 'b'], select2: ['c', 'd', 'e']}} />
      );

      expect(wrapper.find('select')).toHaveLength(2);
      expect(wrapper.find('option')).toHaveLength(5);
      expect(wrapper.find('[name="select1"] option')).toHaveLength(2);
      expect(wrapper.find('[name="select2"] option')).toHaveLength(3);
    })
  })
})
