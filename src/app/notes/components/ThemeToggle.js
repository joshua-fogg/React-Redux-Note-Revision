import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleTheme } from "../state/actions";

const Btn = styled.button`
  @keyframes shiftingSands {
    ${props => `from {background-color: ${props.theme.toggleBtnColor};}`}
    ${props => `to {background-color: ${props.theme.toggleBtnColorOpp};}`}
  }
  border: 2px;
  border-radius: 45px;
  padding: 8px 16px;
  font-size: 12px;
  ${props => `background: ${props.theme.toggleBtnColor};`}
  &:hover {
    cursor: pointer;
    animation-name: shiftingSands;
    animation-duration: 4s;
  }
`;

const ToggleButton = props => (
  <Btn
    id="themeToggle"
    onClick={() => {
      props.toggleTheme(props.lightTheme);
    }}
    children={props.label}
  />
);

const mapStateToProps = state => {
  return {
    lightTheme: state.lightTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: val => dispatch(toggleTheme(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton);
