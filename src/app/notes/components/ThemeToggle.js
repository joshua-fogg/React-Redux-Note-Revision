import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleTheme } from "../state/reducer";

const Btn = styled.button`
  #themeToggle {
    border: 0;
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const ToggleButton = props => (
  <Btn id="themeToggle" onClick={() => {props.toggleTheme(props.lightTheme)}} children={props.label} />
);

const mapStateToProps = (state) => {
  return {
    lightTheme: state.lightTheme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: val => dispatch(toggleTheme(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButton);
