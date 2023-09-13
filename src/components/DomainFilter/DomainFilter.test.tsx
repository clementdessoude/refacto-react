import React from 'react';
import {mount} from 'enzyme';
import DomainFilter from './DomainFilter.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = mount(<DomainFilter domains={['do']} />);

      expect(wrapper.find('select')).toHaveLength(3);
      expect(wrapper.find('option')).toHaveLength(3);
    })

    it('should allow the user to filter', () => {
      const wrapper = mount(<DomainFilter domains={[
        'US_OK-WOK',
        'FR_NK-WOL',
        'FR_OK-NPP',
        'EN_NK-NRP',
        'EN_BL-WOL',
      ]} />);

      expect(wrapper.find('select')).toHaveLength(3);
      expect(wrapper.find('option')).toHaveLength(10);
      expect(wrapper.find('[name="countries"] option')).toHaveLength(3);
      expect(wrapper.find('[name="classifications"] option')).toHaveLength(3);
      expect(wrapper.find('[name="subClassifications"] option')).toHaveLength(4);
    })
  })
})