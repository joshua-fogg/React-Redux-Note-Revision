import React, { Component } from "react";
import styled from "styled-components";

import Button from "./Button";

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

class StyledNote extends Component {
  render() {
    return (
      <Note>
        <Button style={{ marginLeft: "20px" }}>Delete Note</Button>
        <span style={{ width: "50px" }} />
        <span>{this.props.note.text}</span>
      </Note>
    );
  }
}

export default StyledNote;
