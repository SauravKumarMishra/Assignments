import { createMuiTheme, ThemeProvider, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Clock from './Clock';
import Header from './Header';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Clock />
      </Paper>
    </ThemeProvider>
  );
}
