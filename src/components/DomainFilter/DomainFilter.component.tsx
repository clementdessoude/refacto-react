import React, {FC, useEffect, useState} from 'react';
import {DomainFilterProps, DomainFilterPropTypes, DomainFilterState} from "./DomainFilter.types";
import MultipleSelect from "../MultipleSelect";

const DomainFilter: FC<DomainFilterProps> = ({ domains }) => {
  const [state, setState] = useState<DomainFilterState>({
    countries: [],
    classifications: [],
    subClassifications: []
  });

  useEffect((): void => {
    domains.forEach((domain) => {
      if (state.countries.indexOf(domain.substring(0,2)) <= 0) {
        state.countries.push(domain.substring(0,2))
      }
      state.classifications.push(domain.substring(3,5));
      let flag = false;
      for(let j = 0; j < state.subClassifications.length; j++) {
        if (state.subClassifications[j] == domain.substring(6)) {
          flag = true
          break;
        }
      }
      if (!flag) {
        state.subClassifications.push(domain.substring(6));
      }
    })

    setState({
      ...state,
      classifications: state.classifications.filter((e, i, l) => l.indexOf(e) === i),
    })
  }, []);

  return <MultipleSelect selectValues={state}/>
}

DomainFilter.displayName = 'DomainFilter';

DomainFilter.propTypes = DomainFilterPropTypes;

export default DomainFilter
