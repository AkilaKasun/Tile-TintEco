import React from 'react'
import Grid from "@mui/material/Grid"; // Grid version 1
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from '@mui/icons-material/GridView';
import Box from "@mui/material/Box";
import { Fade } from "react-slideshow-image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


// Define a custom Item component that applies spec

function Cards({icon,title,description}) {
  return (
    <div >
      <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="140" // Match the height of your CardMedia
                  >
                    {icon}
                
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
    </div>
  )
}

export default Cards
