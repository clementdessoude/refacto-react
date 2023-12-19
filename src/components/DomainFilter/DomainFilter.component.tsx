import React from 'react';

interface Props {
  domains: string[]
}

function filterDomains() {
  const countriesSelect = document.getElementById('countriesSelect') as HTMLSelectElement;
  const classificationsSelect = document.getElementById('classificationsSelect') as HTMLSelectElement;
  const subClassificationsSelect = document.getElementById('subClassificationsSelect') as HTMLSelectElement;

  const countries = Array.from(countriesSelect.selectedOptions).map((option) => option.value);
  const classifications = Array.from(classificationsSelect.selectedOptions).map((option) => option.value);
  const subClassifications = Array.from(subClassificationsSelect.selectedOptions).map((option) => option.value);

  return window.open(`http://localhost:3000?countries=${countries.join(',')}&classifications=${classifications.join(',')}&subClassification=${subClassifications.join(',')}`, '_blank');
}

const DomainFilter: React.FC<Props> = ({ domains }) => {
    return (
    <>
      <select id="countriesSelect" title="countriesSelect" name="countries" multiple>
        {domains
        .map((v) => v.substring(0, 2))
        .filter((e, i, l) => l.indexOf(e) === i)
        .map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <select id="classificationsSelect" title="classificationsSelect" name="classifications" multiple>
        {domains
        .map((v) => v.substring(3, 5))
        .filter((e, i, l) => l.indexOf(e) === i)
        .map((classification) => (
          <option value={classification} key={classification}>
            {classification}
          </option>
        ))}
      </select>
      <select id="subClassificationsSelect" title="subClassificationsSelect" name="subClassifications" multiple>
        {domains
        .map((v) => v.substring(6))
        .filter((e, i, l) => l.indexOf(e) === i)
        .map((subClassification) => (
          <option value={subClassification} key={subClassification}>
            {subClassification}
          </option>
        ))}
      </select>
      <button id="filterButton" title="filterButton" type="button" onClick={() => filterDomains()}>
        Filter
      </button>
    </>
  );
};

export default DomainFilter
