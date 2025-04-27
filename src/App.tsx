import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'violet',
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <p>Welcome to the Budget App</p>
        <Button>Create New Budget</Button>
      </div>
    </MantineProvider>
  );
}

export default App;
