import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';


                
const Icon = styled("img")(({
    width: "130px",
    height: "130px",
    objectFit: "contain",
    objectPosition: "center"
}));

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'#f12228' }}>
        <Toolbar sx={{height:"80px", gap:"30px"}}>
            <Icon src='/icons/icon.png' alt='PokePedia' sx={{display: {xs:'none', sm:'block'}}}></Icon>
            <Typography
                variant="h4"
                noWrap
                component="div"
                
                sx={{ flexGrow: 1, display: 'block',fontFamily: 'Audiowide, sans-serif', textShadow: '4px 4px 8px rgba(0,0,0,0.5)'}}
            >
                RotomDex
            </Typography >
        </Toolbar>
      </AppBar>
    </Box>
  );
}
