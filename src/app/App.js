import React from "react";
import { connect } from "react-redux";
import NotesContainer from "./notes/components/NotesContainer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const App = props => {
  return (
    <ThemeProvider theme={props.lightTheme ? lightTheme : darkTheme}>
      <NotesContainer />
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    lightTheme: state.lightTheme
  };
};

export default connect(mapStateToProps)(App);
