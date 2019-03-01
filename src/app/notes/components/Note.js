import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Button from "./Button";
import { deleteNote, loadNotes } from "../state/reducer";

const Note = styled.div`
    ${props => `background: ${props.theme.noteBackgroundColor};`}
    ${props => `border: ${props.theme.noteBorder};`}
    ${props => `color: ${props.theme.pageText};`}
    ${props => `padding: ${props.theme.space[3]}px;`}
    ${props => `font-size: ${props.theme.fontSizes.gamma}px;`}
    ${props => `border-bottom: ${props.theme.noteBorderStyle};`}
    cursor: pointer;
    &:hover {
      ${props => `background: ${props.theme.noteHoverBackground};`} 
  };
  span {
    padding: 10px;
  }
`;

const StyledNote = ({ deleteNote, note, key }) => {
  return (
    <Note>
      <Button
        onClick={() => {
          deleteNote(note.id);
        }}
        style={{ marginLeft: "20px" }}
      >
        Delete Note
      </Button>
      <span style={{ width: "50px" }} />
      <span>{note.text}</span>
    </Note>
  );
};
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: noteId => {
      dispatch(deleteNote(noteId));
      dispatch(loadNotes(noteId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledNote);
