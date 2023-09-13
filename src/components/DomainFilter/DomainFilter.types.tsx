import PropTypes from 'prop-types';

export type DomainFilterState = {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

export type DomainFilterProps = {
  domains: string[]
}

export const DomainFilterPropTypes = {
  domains: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
