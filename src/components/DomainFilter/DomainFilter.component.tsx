import React, { useState, useEffect } from 'react';

interface Props {
  domains: string[]
}

const DomainFilter: React.FC<Props> = ({ domains }) => {
    return (
    <>
      <select title="countriesSelect" name="countries" multiple>
        {domains
        .map((v) => v.substring(0, 2))
        .filter((e, i, l) => l.indexOf(e) === i)
        .map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <select title="classificationsSelect" name="classifications" multiple>
        {domains
        .map((v) => v.substring(3, 5))
        .filter((e, i, l) => l.indexOf(e) === i)
        .map((classification) => (
          <option value={classification} key={classification}>
            {classification}
          </option>
        ))}
      </select>
      <select title="subClassificationsSelect" name="subClassifications" multiple>
        {domains
        .map((v) => v.substring(6))
        .filter((e, i, l) => l.indexOf(e) === i)
        .map((subClassification) => (
          <option value={subClassification} key={subClassification}>
            {subClassification}
          </option>
        ))}
      </select>
    </>
  );
};

export default DomainFilter
