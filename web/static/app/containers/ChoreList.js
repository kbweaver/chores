import { connect } from 'react-redux';
import ChoreListComponent from '../components/ChoreListComponent';
import { deleteChore } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    chores: state.chores.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteChore: chore => dispatch(deleteChore(chore)),
  };
}

const ChoreList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoreListComponent);

export default ChoreList;
