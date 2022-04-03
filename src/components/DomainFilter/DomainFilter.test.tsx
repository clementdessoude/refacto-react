import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={['US_OK-WOK']} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })

    const domains = [
      'US_OK-WOK',
      'FR_NK-WOL',
      'FR_OK-NPP',
      'EN_NK-NRP',
      'EN_BL-WOL',
    ];

    it('should render correction number of countries', () => {
      const wrapper = shallow(<DomainFilter domains={domains} />);
      expect(wrapper.find('select[name="countries"] option')).toHaveLength(3);
    })

    it('should render correction number of classifications', () => {
      const wrapper = shallow(<DomainFilter domains={domains} />);
      expect(wrapper.find('select[name="classifications"] option')).toHaveLength(3);
    })

    it('should render correction number of subclassifications', () => {
      const wrapper = shallow(<DomainFilter domains={domains} />);
      expect(wrapper.find('select[name="subClassifications"] option')).toHaveLength(4);
    })
  })
})
