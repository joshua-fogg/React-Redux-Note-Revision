import React, { Component } from 'react';
import NotesContainer from './notes/components/NotesContainer';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <NotesContainer />
            </ThemeProvider>
        );
    }
}

export default App;
