import React, { Component } from "react";
import styled from "styled-components";

const NoteWrapper = styled.div`
  ${props => `
    display: flex;
    align-items: center;
    background: rgba(0,0,0,0.05);
    padding: 8px 16px;
    border-radius: 5px;
    label {
        color: ${props => props.theme.label};
    }
    input {
        background: ${props => props.theme.textFieldBackground};
        border: ${props => props.theme.textFieldBorderStyle};
        padding: 8px;
        margin: 0 16px;
        &:focus {
            background: ${props => props.theme.textFieldFocusBackground};
        }
    }
    button {
        padding: 8px 16px;
        border:0;
        background-color: ${props => props.theme.buttonBackground};
        color: ${props => props.theme.buttonText};
    }
`}
`;

class StyledNoteWrapper extends Component {
  render() {
    return <NoteWrapper>{this.props.children}</NoteWrapper>;
  }
}

export default StyledNoteWrapper;
