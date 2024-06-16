import React, { useState  } from "react";
import "react-slideshow-image/dist/styles.css";
import Banner from "../assets/landing.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';  
import "../styles/Location.css";
import { Slide } from "react-awesome-reveal";
import Dropdown from '../components/Dropdown'; 
import { useNavigate } from 'react-router-dom';

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Location() {
  const navigate = useNavigate();
  
  const districts = [
    'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo',
    'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara',
    'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar',
    'Matale', 'Matara', 'Monaragala', 'Mullaitivu', 'Nuwara Eliya',
    'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
  ];

  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const handleButtonClick = () => {
    console.log('Button clicked!'+selectedDistricts); 
    navigate(`/location/${selectedDistricts}`);
  };

  return (
    <div className="landingPage" style={{ backgroundImage: `url(${Banner})` }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="fullHeightGrid"
        style={{ minHeight: "100vh" }}
      >
        <Item>
          <Slide direction="down" duration={1300} triggerOnce>
            <div className="contentColor">
              <h1 className="topicColor">TILE&TINT ECO</h1>
              <p className="paragraphColor">
                Visualize Your Favorite Tiles and Find the Perfect Option for Your Space.
              </p>
            </div>
          </Slide>
          <Slide direction="up" duration={1300} triggerOnce>
            <Dropdown
              label="Select District"
              items={districts}
              selectedItems={selectedDistricts}
              onChange={setSelectedDistricts}
            />
            <Button
              variant="outlined"
              className="yellowBorderButtonCal"
              onClick={handleButtonClick}  
            >
              Get Material
            </Button>
          </Slide>
        </Item>
      </Grid>
    </div>
  );
}

export default Location;
