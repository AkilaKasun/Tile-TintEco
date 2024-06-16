import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Home.css";
import Cards from "../components/Crads/cards";
import secondimage from "../assets/secondimg.jpg";
import GridViewIcon from "@mui/icons-material/GridView";
import JoinLeftIcon from "@mui/icons-material/JoinLeft";
import PlaceIcon from "@mui/icons-material/Place";
import Badges from "../components/Crads/Badges";
import ProductImg from "../assets/badge1.jpg";
import ProductImg2 from "../assets/color.png";
import ProductImg3 from "../assets/badge.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
const fadeImages = [
  {
    url: "https://i.pinimg.com/originals/1d/20/a9/1d20a9f63d669ba8d8539975cf154a18.jpg",
    caption: "MATCH YOUR WALLS WITH FLOORS",
  },
  {
    url: "https://thetileguys.com.au/wp-content/uploads/2021/08/MONTALTO-GREY-MATT-TILE-300X600mm-a.jpg",
    caption: "DISCOVER THE LATEST LOOK FOR YOUR HOUSE",
  },
  {
    url: "https://www.perini.com.au/wp-content/uploads/2021/10/Sorbet-Handmade-Look-Tiles-1.jpg",
    caption: "SELECT BEST FLOORING MATERIALS FOR YOUR HOUSE",
  },
];

const handleMaterialClick = () => {
  window.location.href = 'http://127.0.0.1:5000';
};

function Home() {
  return (
    <div className="home">
      <Grid container>
        <Grid item xs={12}>
          <div className="slide-container">
            <Fade>
              {fadeImages.map((fadeImage, index) => (
                <div
                  key={index}
                  className="each-slide"
                  style={{ backgroundImage: `url(${fadeImage.url})` }}
                >
                  <div className="slide-caption">
                    <h1>{fadeImage.caption}</h1>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </Grid>
        <Grid item xs={12} container>
          <div
            className="secondimage"
            style={{
              width: "100%",
              height: "600px",
              backgroundImage: `url(${secondimage})`,
            }}
          >
            <div className="cardsContainer">
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                spacing={3}
                className="cards"
              >
                <Grid item xs={1}></Grid>

                <Grid item xs={3} className="cardHover">
                  <Cards
                    icon={
                      <GridViewIcon
                        style={{ fontSize: "60px", marginRight: 8 }}
                      />
                    }
                    title="Wastage Calculations"
                    description="  This tool calculates tile count, wastage, and budget using a shape detection model, providing accurate solutions for common construction issues."
                  />
                </Grid>
                <Grid item xs={3} className="cardHover">
                  <Cards
                    icon={
                      <JoinLeftIcon
                        style={{ fontSize: "60px", marginRight: 8 }}
                      />
                    }
                    title="Colour Matchging AI"
                    description="  This tool uses image recognition to predict tile colors and suggest complementary wall paints, streamlining the design process and enhancing room aesthetics."
                  />
                </Grid>
                <Grid item xs={3} className="cardHover">
                  <Cards
                    icon={
                      <PlaceIcon style={{ fontSize: "60px", marginRight: 8 }} />
                    }
                    title="Material selection"
                    description="  This tool recommends floor tile materials based on local climate data, ensuring optimal performance and aesthetic appeal for your specific environmental conditions."
                  />
                </Grid>

                <Grid item xs={1}></Grid>
              </Grid>
            </div>

            <div className="content">
              <p className="paragraph">Best Service From Us</p>
              <h1 className="topic">
                At Best Tile, We're With You Every Step of the Way
              </h1>
            </div>
          </div>
        </Grid>

        <div className="explorecontent">
          <h1> EXPLORE OUR SERVICES,</h1>
          <div className="badge-container">
            <Badges
              imageUrl="https://www.rubi.com/us/blog/wp-content/uploads/2017/05/Types-of-Floor-Tiles-Ceramic-Tiles.jpg"
              text="Inspiring Tile Designs"
            />
            <Badges
              imageUrl="https://cdn.mos.cms.futurecdn.net/eDtXUrdg8gMPkTXeci9GFa-415-80.jpg"
              text="Innovative Colour Solutions"
            />
            <Badges
              imageUrl="https://m.media-amazon.com/images/I/71MPJO8O2lS._AC_UF894,1000_QL80_.jpg"
              text="Innovative Marerial Solutions"
            />
          </div>

          <p className="exploreparagraph">
            {" "}
            <i>Quality Flooring Designs That Exceed Your Expectations</i>
          </p>
        </div>

        <Grid
          container
          spacing={2}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Slide direction="left" duration={1300}>
              <div
                className="productimage"
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundImage: `url(${ProductImg})`,
                }}
              ></div>
            </Slide>
          </Grid>
          <Grid item xs={5} className="productdescription">
            <Slide direction="right" duration={1300}>
              <div className="productdescription">
                <h1>Calculate Tile Count & Wastage</h1>
                <p>
                  <i>
                    This tool developed to calculate tile count, wastage, and
                    budget for the estimated tiles & it allows you to calculate
                    tile count for your floor area and wastage of the tiles
                    using an shapes detection model. This tool gives you highly accurate
                    results and solutions for the main problem in the
                    construction field these days.
                  </i>
                </p>
                <Button
                    variant="outlined"
                    className="Button"
                    component={Link}
                    to="/calculation"
                  >
                  Let's Start
                </Button>
              </div>
            </Slide>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Grid item xs={1}></Grid>
          <Grid item xs={5} className="productdescription">
            <Slide direction="left" duration={1300}>
              <h1>Colour Prediction using AI</h1>
              <p>
                <i>
                  This tool is designed to analyze and predict tile colors using
                  advanced image recognition technology, providing highly
                  accurate color matching suggestions for wall paints. It caters
                  to one of the prevalent challenges in the interior design and
                  construction fields—choosing harmonious color schemes. By
                  simply uploading an image of your tile, this application
                  identifies its color and offers a palette of complementary
                  wall colors. This system not only enhances aesthetic appeal
                  but also assists in making informed decisions, thereby
                  streamlining the design process and elevating the overall
                  visual coherence of spaces.
                </i>
              </p>

              <Button
                variant="outlined"
                className="Button"
                component={Link}
                to="/colorimage"
              >
                Let's Start
              </Button>
            </Slide>
          </Grid>
          <Grid item xs={5}>
            <Slide direction="right" duration={1300}>
              <div
                className="productimage"
                style={{
                  width: "100%",
                  height: "300px",
                  // borderRadius:"20px",
                  backgroundImage: `url(${ProductImg2})`,
                }}
              ></div>
            </Slide>
          </Grid>

          <Grid
            container
            spacing={2}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Slide direction="left" duration={1300}>
                <div
                  className="productimage"
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundImage: `url(${ProductImg3})`,
                  }}
                ></div>
              </Slide>
            </Grid>
            <Grid item xs={5} className="productdescription">
              <Slide direction="right" duration={1300}>
                <div className="productdescription">
                  <h1>Floor Matreial Select Using Location</h1>
                  <p>
                    <i>
                      This innovative tool provides personalized floor tile
                      material suggestions based on local climate conditions. By
                      inputting your geographic location, the tool utilizes
                      real-time temperature data to recommend the most suitable
                      tile materials for your floors. It addresses a common
                      issue in building and renovation by ensuring that the
                      selected materials not only enhance the aesthetic of your
                      space but also perform optimally in your specific
                      environmental conditions. Whether you're dealing with high
                      humidity, extreme cold, or fluctuating temperatures, this
                      tool guides you to make the best choice for durability and
                      comfort.
                    </i>
                  </p>
                  <Button
                    variant="outlined"
                    className="Button"
                    component={Link}
                    to="/location"
                  >
                    Let's Start
                  </Button>
                </div>
              </Slide>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>

          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
