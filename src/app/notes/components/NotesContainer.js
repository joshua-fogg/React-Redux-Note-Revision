import { connect } from "react-redux";
import Notes from "./Notes";
import { loadNotes } from "../state";
import { addNote, deleteNote, updateNewNote } from "../state/reducer";

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    newNote: state.newNote
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadNotes: () => {
      dispatch(loadNotes());
    },
    addNote: text => {
      dispatch(addNote(text));
    },
    deleteNote: id => {
      dispatch(deleteNote(id));
    },
    onChangeNewNote: (text) => {
        dispatch(updateNewNote(text))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
