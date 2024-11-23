import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      {/* Quote Section */}
      <div className="aboutQuoteContainer">
        <Typography variant="h5" className="aboutQuote">
          "{about.quote}"
        </Typography>
      </div>

      {/* About Section */}
      <div className="aboutContainer2">
        <div className="aboutLeft">
          <img src={about.avatar.url} alt="Hassan" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about.name}
          </Typography>

          <Typography variant="h6" className="aboutTitle">
            {about.title}
          </Typography>
        </div>

        <div className="aboutRight">
          <Typography
            style={{
              wordSpacing: "3px",
              lineHeight: "1.8",
              letterSpacing: "1px",
              textAlign: "justify",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
