import React, { useState, ChangeEvent } from 'react';

interface Props {
  domains: string[]
};

export const getListFromDomains = (domains: string[]) => {
  let countries:string[] = [];  
  let classifications:string[] = [];
  let subClassifications:string[] = [];
  domains.forEach((domain) => {
    const [ country, classificationAndSub ] = domain.split('_');
    if(countries.indexOf(country) === -1) {
      countries.push(country);
    }
    const [ classification, subClassification ] = classificationAndSub.split('-');
    if(classifications.indexOf(classification) === -1) {
      classifications.push(classification);
    }
    if(subClassifications.indexOf(subClassification) === -1) {
      subClassifications.push(subClassification);
    }
  });
  return [ countries, classifications, subClassifications ];
};

const DomainFilter = ({ domains }: Props) => {
  const [ state, setState ] = useState({
    countries: [],
    classifications: [],
    subClassifications: []
  });

  const [ countries, classifications, subClassifications ] = getListFromDomains(domains);

  const handleChange = (stateElement:string) => (event: ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      [stateElement]: Array.from(event.target.selectedOptions).map(option => option.value.toString())
    });
  };

  return (<>
    <select name="countries" multiple onChange={handleChange('countries')}>
      {countries.map(country => (
        <option value={country} key={country}>{country}</option>
      ))}
    </select>
    <select name="classifications" multiple onChange={handleChange('classifications')}>
      {classifications.map(classification => (
        <option value={classification} key={classification}>{classification}</option>
      ))}
    </select>
    <select name="subClassifications" multiple onChange={handleChange('subClassifications')}>
      {subClassifications.map(subClassification => (
        <option value={subClassification} key={subClassification}>{subClassification}</option>
      ))}
    </select>
  </>);

};

export default DomainFilter
