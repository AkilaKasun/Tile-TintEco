import React from "react";
import "react-slideshow-image/dist/styles.css";
import Banner from "../assets/landing.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import "../styles/LandingPage.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LandingPage() {
  return (
    <div className="landingPage" style={{ backgroundImage: `url(${Banner})` }}>
      <Grid
        item
        xs={12}
        container
        direction="column"
        justifyContent="center"
        className="fullHeightGrid"
      >
        <Item>
        <Slide direction="down"  duration={1300} triggerOnce>
          <div className="contentL">
            <h1 className="topicL">TILE&TINT ECO</h1>
            <p className="paragraphL">
              Visualize Your Favorite Tiles and Find the Perfect Option for Your
              Space.
            </p>
          </div>
          </Slide>

          <Slide direction="up"  duration={1300} triggerOnce> 
            <Button
            variant="outlined"
            className="yellowBorderButton"
            component={Link}
            to="/home"
          >
            Let's Start
          </Button></Slide>

         
        </Item>
      </Grid>
    </div>
  );
}

export default LandingPage;
