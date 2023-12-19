import DomainFilter from './DomainFilter.component';
import { connect } from 'react-redux'
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
  domains: state.domains
})

export default connect(mapStateToProps)(DomainFilter)