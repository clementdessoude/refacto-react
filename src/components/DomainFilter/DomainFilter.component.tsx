import React, { useState, useEffect } from 'react';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

interface Props {
  domains: string[];
}

interface State {
  countries: string[];
  classifications: string[];
  subClassifications: string[];
}

const DomainFilter: React.FC<Props> = ({ domains }) => {
  const [state, setState] = useState<State>({
    countries: [],
    classifications: [],
    subClassifications: [],
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      countries: domains
        .map((v) => v.substring(0, 2))
        .filter((e, i, l) => l.indexOf(e) === i),
      classifications: domains
        .map((v) => v.substring(3, 5))
        .filter((e, i, l) => l.indexOf(e) === i),
      subClassifications: domains
        .map((v) => v.substring(6))
        .filter((e, i, l) => l.indexOf(e) === i),
    }));
  }, [domains]);

  return (
    <>
      <select title="countriesSelect" name="countries" multiple>
        {state.countries.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <select title="classificationsSelect" name="classifications" multiple>
        {state.classifications.map((classification) => (
          <option value={classification} key={classification}>
            {classification}
          </option>
        ))}
      </select>
      <select title="subClassificationsSelect" name="subClassifications" multiple>
        {state.subClassifications.map((subClassification) => (
          <option value={subClassification} key={subClassification}>
            {subClassification}
          </option>
        ))}
      </select>
    </>
  );
};

export default DomainFilter
