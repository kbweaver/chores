import { connect } from 'react-redux';
import ChoreListComponent from '../components/ChoreListComponent.jsx';

const mapStateToProps = (state) => {
  return {
    chores: state.chores
  };
};

const ChoreList = connect(
  mapStateToProps
)(ChoreListComponent);

export default ChoreList;
