import React from "react";
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
`}
@media all and (max-width: 470px) {
    display: flex;
    flex-wrap: wrap;
    span {
        padding: 10px;
        margin-left: 10%;
        margin-right: 5%;
        width: 100%;
        button {
            width: 90%
            margin:auto;
        }
    }
  }
`;

const StyledNoteWrapper = ({ children }) => {
  return (
    <NoteWrapper>
      {children.map((child, i) => (
        <span key={i}>{child}</span>
      ))}
    </NoteWrapper>
  );
};

export default StyledNoteWrapper;
