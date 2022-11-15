import React from 'react'
import { AppBar,Button,Stack,Toolbar, Typography } from '@mui/material';


function Header() {
  return (
      <AppBar position='static'>
        <Toolbar>
          <Typography>Les pains du lendemain</Typography>
          <Stack spacing={2} direction='row' sx={{marginLeft:'auto'}}>
            <Button variant='text' color='inherit' href='A_propos'>A propos</Button>
            <Button variant='text' color='inherit' href='Category'>Category</Button>
            <Button variant='text' color='inherit' href='Card'>Card</Button>
            <Button variant='text' color='inherit' href='Contact'>Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>
  )
}


export default Header