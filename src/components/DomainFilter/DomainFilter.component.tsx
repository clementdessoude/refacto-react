import React from 'react';

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
    this.setState({
      ...this.state,
      countries: this.props.domains.map(v => v.substring(0,2)).filter((e, i, l) => l.indexOf(e) === i),
      classifications: this.props.domains.map(v => v.substring(3,5)).filter((e, i, l) => l.indexOf(e) === i),
      subClassifications: this.props.domains.map(v => v.substring(6)).filter((e, i, l) => l.indexOf(e) === i)
    })
    this.forceUpdate()
  }

  render() {

    return (<>
      <select title='countriesSelect' name="countries" multiple>
        {this.state.countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select title='classificationsSelect' name="classifications" multiple>
        {this.state.classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select title='subClassificationsSelect' name="subClassifications" multiple>
        {this.state.subClassifications.map(subClassification => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
      </select>
    </>)
  }
}

export default DomainFilter
