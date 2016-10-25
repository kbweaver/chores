import { connect } from 'react-redux';
import ChoreListComponent from '../components/ChoreListComponent';

const mapStateToProps = (state) => {
  return {
    chores: state.chores.items,
  };
};

const ChoreList = connect(
  mapStateToProps
)(ChoreListComponent);

export default ChoreList;
