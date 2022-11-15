import React from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography>Ecole Superieure Polytechnique</Typography>
          <Tabs textColor='inherit' sx={{marginLeft:'auto'}}>
            <Tab label="A propos"/>
            <Tab label="Formation"/>
            <Tab label="Certifications"/>
            <Tab label="Admission"/>
            <Tab label="Contact"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header