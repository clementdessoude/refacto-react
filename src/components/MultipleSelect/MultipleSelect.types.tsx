import PropTypes from 'prop-types';

export type MultipleSelectProps = {
  selectValues: Record<string, string[]>
}

export const MultipleSelectPropTypes = {
  selectValues: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  ).isRequired,
};
