import React, { Component } from "react";
import styled from "styled-components";

import Note from "./Note";
import Title from "./Title";
import Button from './Button';
import ThemeToggle from "./ThemeToggle";
import NoteWrapper from "./NoteWrapper";

const Notes = styled.div`
  ${props => `background: ${props.theme.pageBackground};`}
  min-height: 100%;
  padding: 10%;
  display: flex-block;
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media all and (max-width: 600px) {
    padding: 16px;
  }
  @media all and (max-width: 470px) {
    padding: 5px;
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
          <Button disabled={!this.props.newNote} onClick={this.onSubmit}>
            Add
          </Button>
        </NoteWrapper>
        {Object.values(this.props.notes).map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </Notes>
    );
  }
}

export default StyledNotes;
