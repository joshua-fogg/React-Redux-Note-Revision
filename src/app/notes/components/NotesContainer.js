import { connect } from "react-redux";
import Notes from "./Notes";
import { loadNotes } from "../state";
import { addNote, deleteNote } from "../state/reducer";

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadNotes: () => {
      dispatch(loadNotes());
    },
    addNote: text => {
      dispatch(addNote(text));
    //   dispatch(loadNotes());
    },
    deleteNote: id => {
      dispatch(deleteNote(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
