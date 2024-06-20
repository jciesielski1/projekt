/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(to right, #38761d, #8fce00)",
          color: "#fff",
        }}
      >
        <Toolbar>
          <img
            src="hamburger.png"
            alt="Hamburger Icon"
            style={{
              display: { xs: "none", md: "flex" },
              marginRight: 8,
              height: 40,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              padding: "10px",
            }}
          >
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              RECIPE FINDER
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Find your own recipe based on macronutrients!
            </Typography>
          </Box>
          <img
            src="broccoli.png"
            alt="Broccoli Icon"
            style={{
              display: { xs: "none", md: "flex" },
              marginRight: 8,
              height: 40,
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
