import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Slide } from 'react-awesome-reveal';
import TileWastageCalculator from './TileWastageCalculator'; // Ensure the correct path to your TileWastageCalculator component

import 'react-slideshow-image/dist/styles.css'; // Assuming you are using this for other parts of your project
import '../styles/Calculation.css'; // Adjust path as necessary
import Banner from '../assets/landing.jpg'; // Ensure the correct path to your image file

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Calculation() {
    const [open, setOpen] = useState(false);
    const fileInputRef = useRef(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleButtonClick = () => {
        // If you need the file input functionality, you can handle it separately
        window.location.href = 'http://127.0.0.1:5000';
    };

    return (
        <div className="landingPage" style={{ backgroundImage: `url(${Banner})` }}>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                capture="environment"
                onChange={(event) => {
                    console.log(event.target.files[0]); // Handle file input here
                }}
            />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="fullHeightGrid"
            >
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Item>
                        <Slide direction="down" duration={1300} triggerOnce>
                            <div className="contentL">
                                <h1 className="topicL">TILE&TINT ECO</h1>
                                <p className="paragraphL">
                                    Visualize Your Favorite Tiles and Find the Perfect Option for Your Space.
                                </p>
                            </div>
                        </Slide>

                        <Slide direction="up" duration={1300} triggerOnce>
                            <Button
                                variant="outlined"
                                className="yellowBorderButtonCal"
                                onClick={handleButtonClick}
                            >
                                Calculate Tile Wastage
                            </Button>
                        </Slide>
                    </Item>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogContent>
                    <TileWastageCalculator />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Calculation;
