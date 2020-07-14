import React from "react";
import "./Box.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function Box1() {
  return (
    <div className="Box1">
      <Grid item container xs={12} justify="center">
        <Link to="/about">
          <Box
            className="Box"
            m={10}
            p={5}
            color="#84c318"
            style={{ width: "15rem", height: "15rem" }}
          >
            About Us
          </Box>
        </Link>
        {/* boxShadow={5}
        bgcolor="#fafafa"

        m={20}
        p={10}
        style={{ width: '15rem', height: '15rem' }}
      >
        About Us */}
        <Link to="/whatwe">
          <Box
            className="Box"
            m={10}
            p={5}
            color="#84c318"
            style={{ width: "15rem", height: "15rem" }}
          >
            What We Are Giving
          </Box>
        </Link>
      </Grid>
    </div>
  );
}
export { Box1 as default };
