import React, { Component } from "react";
import styled from "styled-components";

import Note from "./Note";
import Title from "./Title";
import ThemeToggle from "./ThemeToggle";
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
  }

  handleOnChangeNote = e => {
    this.props.onChangeNewNote(e.target.value);
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
          <ThemeToggle
            id="toggleButton"
            onClick={this.props.toggleTheme}
            label="Toggle theme"
          />
        </header>
        <NoteWrapper>
          <label>Add another:</label>
          <input
            value={this.props.newNote}
            id="newNoteInput"
            onChange={this.handleOnChangeNote}
            type="text"
            placeholder="text for new note"
          />
          <button disabled={!this.props.newNote} onClick={this.onSubmit}>
            Add
          </button>
        </NoteWrapper>
        {Object.values(this.props.notes).map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </Notes>
    );
  }
}

export default StyledNotes;
