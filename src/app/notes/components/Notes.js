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
  }

  render() {
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
            onChange={e => {
              console.log("TODO:... Onchange input", e.target.value);
            }}
            type="text"
            placeholder="text for new note"
          />
          <button onClick={this.props.addNote}>Add</button>
        </NoteWrapper>
        {Object.values(this.props.notes).map((note, i) => (
          <Note key={i} note={note} />
        ))}
      </Notes>
    );
  }
}

export default StyledNotes;
