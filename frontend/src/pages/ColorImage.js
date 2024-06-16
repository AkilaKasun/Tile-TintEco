import React, { useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Banner from "../assets/landing.jpg";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "../styles/ColorImage.css";

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ColorBox = styled('div')({
  width: '100px',
  height: '100px',
  marginTop: '20px',
  border: '2px solid black', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  
});

function ColorImage() {
  const fileInputRefImage = useRef(null);
  const [dominantColor, setDominantColor] = useState("transparent");
  const [tileRecommendation, setTileRecommendation] = useState("");
  const [tileColorName, setTileColorName] = useState("");

  const handleUploadImage = () => {
    fileInputRefImage.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("https://api.imagga.com/v2/colors", {
          method: "POST",
          headers: {
            Authorization: "Basic YWNjXzA3ZjNiNWM0MWUxM2NiYjplMzUxNDk0YzIxYzJmOWZkNjY5MDViNjM5NGRmODQwMQ=="
          },
          body: formData
        });

        const data = await response.json();
        if (data.result) {
          const colors = data.result.colors.image_colors;
          const dominant = colors[0];
          const colorRgb = `rgb(${dominant.r}, ${dominant.g}, ${dominant.b})`;
          setDominantColor(colorRgb);
          const recommendation = recommendTileColor([dominant.r, dominant.g, dominant.b]);
          setTileRecommendation(recommendation.color);
          setTileColorName(recommendation.name);
        }
      } catch (error) {
        console.error("Failed to fetch dominant color:", error);
      }
    }
  };

  const recommendTileColor = (color) => {
    const [r, g, b] = color;
    const hsl = rgbToHsl(r, g, b);
    const [h, s, l] = hsl;

    if (l < 0.2) {
      return { color: 'rgb(255, 255, 255)', name: 'Light Grey' };
    } else if (l > 0.8) {
      return { color: 'rgb(35, 35, 35)', name: 'Dark Charcoal' };
    } else if (s < 0.25) {
      return { color: 'rgb(245, 245, 220)', name: 'Warm Beige' };
    } else if (h <= 30 || h > 330) {
      return { color: 'rgb(70, 130, 180)', name: 'Cool Blue' };
    } else if (h > 30 && h <= 90) {
      return { color: 'rgb(244, 164, 96)', name: 'Terracotta' };
    } else if (h > 90 && h <= 210) {
      return { color: 'rgb(245, 245, 220)', name: 'Warm Beige' };
    } else if (h > 210 && h <= 270) {
      return { color: 'rgb(244, 164, 96)', name: 'Sandy Brown' };
    } else if (h > 270 && h <= 330) {
      return { color: 'rgb(152, 251, 152)', name: 'Pale Green' };
    }

    return { color: 'rgb(190, 190, 190)', name: 'Neutral Grey' };
  };

  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h *= 60;
    }
    return [h, s, l];
  }

  return (
    <div className="landingPage" style={{ backgroundImage: `url(${Banner})` }}>
      <input
        type="file"
        ref={fileInputRefImage}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
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
              <div style={{ color: dominantColor, marginTop: "10px" }}>
                Dominant Color: {dominantColor}
                <br />
                Recommended Tile Color: {tileColorName}
                <ColorBox className="mx-auto" style={{ backgroundColor: tileRecommendation }} />
              </div>
            </div>
          </Slide>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}
          >
            <Slide direction="up" duration={1300} triggerOnce>
              <Button
                variant="outlined"
                className="yellowBorderButtonC"
                onClick={handleUploadImage}
              >
                Upload Image
              </Button>
            </Slide>
          </div>
        </Item>
      </Grid>
    </div>
  );
}

export default ColorImage;
