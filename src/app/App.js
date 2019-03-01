import React, { Component } from "react";
import { connect } from "react-redux";
import NotesContainer from "./notes/components/NotesContainer";
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "./theme";

const themeDict = {
    lightTheme,
    darkTheme
}
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeDict[this.props.themeType]}>
        <NotesContainer />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeType: state.themeType
  };
};

export default connect(mapStateToProps)(App);
