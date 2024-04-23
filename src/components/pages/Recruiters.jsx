import React from "react";
import { Box } from "@mui/material";
import TopBar from "../navbar/TopBar";
import Footer from "../navbar/Footer";


const Recruiters = () => {
  return (
    <Box>
    <TopBar />
      <Box minHeight={"100vh"} marginTop={"5%"}>
        {/* Content */}
        Recruiters
      </Box>
    <Footer />
  </Box>
  )
}

export default Recruiters
