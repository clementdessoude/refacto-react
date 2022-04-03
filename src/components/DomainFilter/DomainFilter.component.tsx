import React, { useState } from 'react';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
};

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

  return (<>
    <select name="countries" multiple>
      {countries.map(country => (
        <option value={country} key={country}>{country}</option>
      ))}
    </select>
    <select name="classifications" multiple>
      {classifications.map(classification => (
        <option value={classification} key={classification}>{classification}</option>
      ))}
    </select>
    <select name="subClassifications" multiple>
      {subClassifications.map(subClassification => (
        <option value={subClassification} key={subClassification}>{subClassification}</option>
      ))}
    </select>
  </>);

};

export default DomainFilter
