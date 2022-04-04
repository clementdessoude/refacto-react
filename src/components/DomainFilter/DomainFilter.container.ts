import DomainFilter, { Filters } from './DomainFilter.component';
import { connect } from 'react-redux'
import { getDomains } from '../../redux/domains/selectors';
import { AppState } from '../../redux/store';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState) => ({
  domains: getDomains(state)
})

const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    changeSelectedDomainFilters: (filters: Filters) => dispatch({ type: 'SET_FILTERS', filters })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DomainFilter)

