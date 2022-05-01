import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Button } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';

//FIX
import { MenuIcon } from '@material-ui/core';
//import MenuIcon from '@material-ui/core';

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            i like one piece
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">House</Button>
          <Button color="inherit">Slave</Button>
        </Toolbar>
      </AppBar>
    </Box>

      <p>hello world</p>
      <button onClick={() => alert('clicked')}>hello button</button>
      <Button onClick={() => alert('clicked')}>eee</Button>

    </div>
  );
}

export default App;

