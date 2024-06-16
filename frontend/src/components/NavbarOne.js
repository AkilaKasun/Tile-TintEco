import React, { useState } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button"; // Import the Button component
import Logo from '../assets/TileAndTintEco_Logo.png';
import "../styles/NavbarOne.css";

function NavbarOne() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbarOne">
      <div className="leftSide">
        <img src={Logo} alt="Tile & Tint Eco Logo" />
        <div className="navigations">
          <Link className="navLink" to="/home">Home</Link>
          <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
            className="navLink"
            
          >
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/calculation">Wastage Calculate</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/colorimage">Color Prediction AI</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/location">Material Selection</MenuItem>
          </Menu>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/contact">Contact</Link>
        </div>
      </div>

      <div className="rightSide">
        <div className="socialMedia">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <GithubIcon />
        </div>
      </div>
    </div>
  );
}

export default NavbarOne;
