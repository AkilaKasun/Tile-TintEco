import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



export default function Feedback({ userData }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>{userData.name}</Typography> {/* Display user name */}
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {userData.message} {/* Display user message */}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
