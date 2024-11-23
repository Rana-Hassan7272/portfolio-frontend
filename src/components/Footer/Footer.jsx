import { Typography, Container, Box, Grid, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer" py={5}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom className="footerHeader">
              About Me
            </Typography>
            <Typography variant="body1" className="footerText">
              Hey, my name is Muhammad Hassan Shahbaz. I am a Full-Stack Developer and a
              Data Scientist <b>Programmer</b>.
            </Typography>
            <Link to="/contact" className="footerContactBtn">
              <Button variant="contained" color="secondary">
                Contact Us
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom className="footerHeader">
              Social Media
            </Typography>
            <Box display="flex" justifyContent="center" className="socialIcons">
              <a href="https://github.com/Rana-Hassan7272" target="_blank" rel="noopener noreferrer">
                <BsGithub className="socialIcon github" />
              </a>
              <a href="https://www.instagram.com/stfu.__hassannn?igsh=eG1heG8wdDY5b2xt" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="socialIcon instagram" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-hassan-shahbaz-61b524311/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="socialIcon linkedin" />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
