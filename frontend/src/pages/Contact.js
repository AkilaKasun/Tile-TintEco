import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from "@mui/material/Grid";
import { Table } from 'react-bootstrap';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import "../styles/Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [feedbackData, setFeedbackData] = useState([]);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!values.name || !values.email || !values.message) {
            toast.error("All fields are required. Please fill out every field.");
            return;
        }

        axios.post("http://localhost:8081/addfeedback", values)
            .then(() => {
                toast.success("Details submitted successfully!");
                fetchFeedback(); 
            })
            .catch((err) => {
                toast.error("Failed to submit details: " + err.message);
            });
    };

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = () => {
        axios.get("http://localhost:8081/feedbacks")
            .then(response => {
                setFeedbackData(response.data);
            })
            .catch(error => {
                toast.error("Error fetching feedback data: " + error.message);
            });
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12}>
          <img
            src="https://digitalassets.daltile.com/content/dam/Daltile/website/images/5-3-ratio/DAL_Fyre_FY23_2x10_RES_01_FY24_53_banner.jpg/jcr:content/renditions/cq5dam.web.1200.1200.jpeg?h=170&la=en&w=170"
            alt="Placeholder"
            style={{ width: "100%", height: "auto", maxHeight: "450px" }}
          />
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: "20px" }}>
          <div
            className="contact-info"
            style={{ padding: "20px", borderRadius: "8px" }}
          >
            <h2>TILE&TINTECO CONTACT CENTRE</h2>
            <p>+94 71 1304 475</p>
            <p>Email: tile&tinteco@gmail.com</p>
            <h3>COPORATE OFFICE</h3>
            <p>NO 136, Sri Srada Mawatha,Kaikawala,</p>
            <p>Matale , Sri Lanka</p>
            <p>Phone: +94 11 44657573 | Fax: +94 11 984755687</p>
            <div className="socialMediaC">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
              <GithubIcon />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: "20px" }}>
          <section
            className="formcarry-container"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <form
             
              onSubmit={handleSubmit}
              enctype="multipart/form-data"
            >
              <div className="formcarry-block">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your first and last name"
                  onChange={handleChange}
                />
              </div>

              <div className="formcarry-block">
                <label htmlFor="email">Your Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@doe.com"
                  onChange={handleChange}
                />
              </div>

              <div className="formcarry-block">
                <label htmlFor="message">Your message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message..."
                  onChange={handleChange}
                />
              </div>

              <div className="formcarry-block">
                <button type="submit" name="submit" id="submit" value="submit">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </Grid>

        <h1 className="mx-auto"><u>USERS FEEDBACK SECTION</u></h1>
        <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbackData.map((feedback, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{feedback.name}</td>
                                        <td>{feedback.email}</td>
                                        <td>{feedback.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;