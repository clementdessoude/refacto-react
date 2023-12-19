import React from 'react';
// import { threadId } from 'worker_threads';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

class DomainFilter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      countries: [],
      classifications: [],
      subClassifications: []
    }
  }

  componentDidMount() {
    const { domains } = this.props

    this.setState({
      ...this.state,
      countries: domains.map(v => v.substring(0,2)).filter((e, i, l) => l.indexOf(e) === i),
      classifications: domains.map(v => v.substring(3,5)).filter((e, i, l) => l.indexOf(e) === i),
      subClassifications: domains.map(v => v.substring(6)).filter((e, i, l) => l.indexOf(e) === i)
    })
    this.forceUpdate()
  }

  render() {
    const {countries, classifications, subClassifications} = this.state || {
      countries: [],
      classifications: [],
      subClassifications: []
    };

    return (<>
      <select title='countriesSelect' name="countries" multiple>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select title='classificationsSelect' name="classifications" multiple>
        {classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select title='subClassificationsSelect' name="subClassifications" multiple>
        {subClassifications.map(subClassification => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
      </select>
    </>)
  }
}

export default DomainFilter
