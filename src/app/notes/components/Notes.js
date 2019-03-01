import React, { Component } from "react";
import styled from "styled-components";

import Note from "./Note";
import Title from "./Title";
import NoteWrapper from "./NoteWrapper";

const Notes = styled.div`
  ${props => `background: ${props.theme.pageBackground};`}
  min-height: 100%;
  padding: 20px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #themeToggle {
    border: 0;
    padding: 8px 16px;
    font-size: 12px;
  }
`;

class StyledNotes extends Component {
  componentDidMount() {
    this.props.loadNotes();
    console.log('onchangenewnote', typeof this.props.onChangeNewNote)
  }

  handleOnChangeNote = e => {
      console.log('PROPS: ', this.props)
    this.props.onChangeNewNote(e.target.value)
    // this.setState({ newNote: e.target.value });
  };
  onSubmit = () => {
    this.props.addNote(this.props.newNote);
  };

  render() {
    console.warn("RENDER EVENT");
    return (
      <Notes>
        <header>
          <Title>Notes</Title>
          <button id="themeToggle">Toggle theme</button>
        </header>
        <NoteWrapper>
          <label>Add another:</label>
          <input
            id="newNoteInput"
            onChange={this.handleOnChangeNote}
            type="text"
            placeholder="text for new note"
          />
          {"TODO: DELETE THIS ===== " + JSON.stringify(this.props)}
          <button onClick={this.onSubmit}>Add</button>
        </NoteWrapper>
        {JSON.stringify(this.props.notes)}
        {Object.values(this.props.notes).map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </Notes>
    );
  }
}

export default StyledNotes;
