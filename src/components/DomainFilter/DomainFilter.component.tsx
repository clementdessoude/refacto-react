import React, { useState } from 'react';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
};

interface Props {
  domains: string[]
};

const getListFromDomains = (domains: string[]) => {
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

  const getListFromDomains = (domains: string[]) => {
    console.log(domains);
    let countries:string[] = [];  
    let classifications:string[] = [];
    let subClassifications:string[] = [];
    domains.forEach((domain) => {
      const [ country, classificationAndSub ] = domain.split('_');
      if(countries.indexOf(country) === -1) {
        countries.push(country);
      }
      console.log('c&s',classificationAndSub, classificationAndSub.split('-'));
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

/*
class DomainFilter extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      countries: [],
      classifications: [],
      subClassifications: []
    }
  }

  componentDidMount() {
    const { domains } = this.props;
    
    for(let i = 0; i < domains.length; i++) {
      if (this.state.countries.indexOf(domains[i].substring(0,2)) <= 0) {
        this.state.countries.push(domains[i].substring(0,2))
      }
      this.state.classifications.push(domains[i].substring(3,5));
      let flag = false;
      for(let j = 0; j < this.state.subClassifications.length; j++) {
        if (this.state.subClassifications[j] === domains[i].substring(6)) {
          flag = true
          break;
        }
      }
      if (!flag) {
        this.state.subClassifications.push(domains[i].substring(6));
      }
    }

    this.setState({
      ...this.state,
      classifications: this.state.classifications.filter((e, i, l) => l.indexOf(e) === i),
    })
    this.forceUpdate()
  }

  render() {
    const {countries, classifications, subClassifications} = this.state;

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
    </>)
  }
}
*/

export default DomainFilter
