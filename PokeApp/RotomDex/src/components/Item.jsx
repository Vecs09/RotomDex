import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Item({initImg,initName,initDescription}) {
  //console.log(initImg);
  return (
    <Card sx={{backgroundColor:"#1a1a1a", display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <CardActionArea sx={{maxWidth:"260px",maxHeight:"330px",padding:"10px"}} onClick={() => console.log("TEST")}>
        <CardMedia
          component="img"
          height="220"
          image={initImg}
          alt={initName}
          sx={{objectFit:'contain', objectPosition:'center', justifyContent:'center', marginBottom:"10px"}}
        />
        <CardContent>
          <Typography textAlign="center" gutterBottom variant="h5" component="div" color="white" sx={{display:'flex', justifyContent:"center"}}>
            {initName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}