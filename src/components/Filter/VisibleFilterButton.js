import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../store/actions';

import FilterButton from './FilterButton';

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton);
