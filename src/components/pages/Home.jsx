import React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import TopBar from "../navbar/TopBar";
import Footer from "../navbar/Footer";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext, tokens } from "../../theme";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box >
      <TopBar/>
      <Box display={"flex"} flexDirection={"column"} marginTop={"5%"}>
        {/* Section 1 */}
        <Box
          display={"flex"}
          position={"relative"} 
          height={"550px"}
          bgcolor={"#E5E4E2"}
          color={"#fff"}
        >
          <Box width={"68%"} marginTop={"50px"}>
            <Typography
              variant="h1"
              //noWrap
              sx={{
                mr: 2,
                marginLeft: "20px",
                display: { xs: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: `${colors.grey[100]}`,
                textDecoration: "none",
              }}
            >
              Find Your
            </Typography>
            <Typography
              variant="h1"
              // noWrap
              sx={{
                mr: 5,
                marginLeft: "70px",
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: `${colors.primary[902]}`,
                textDecoration: "none",
              }}
            >
              Dream Job
            </Typography>
            <Typography
              variant="h6"
              //noWrap
              sx={{
                mr: 5,
                marginLeft: "40px",
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "arial",
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: `${colors.grey[100]}`,
                textDecoration: "none",
              }}
            >
              Join a community of more than 20,000 <br /> canditates who are
              finding work they <br /> enjoy and earning a good income
            </Typography>
          </Box>
          <Box>
            <div style={{ position: "absolute", bottom: 0}}>
              <img
                src="\image\section1.png"
                alt="Cropped Image"
                style={{
                  width: "450px",
                  height: "550px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Box>
        </Box>
        {/* Middle Section */}
        <Box
          position="absolute"
          top="80%"
          left="10%"
          transform="translate(-50%, -50%)"
        >
          <Box
            marginLeft={"8%"}
            width="1000px"
            height="350px"
            bgcolor="#FEFEFA"
            padding={"12px"}
            borderRadius={"10px"}
          >
            <Box display={"flex"} marginBottom={"10px"}>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                marginLeft={"30px"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Marketing and Sales
              </Box>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                margin={"0 18px 0 18px"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Hotel Management
              </Box>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Management and Finance
              </Box>
            </Box>
            <Box display={"flex"}>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                marginLeft={"30px"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                App Development
              </Box>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                margin={"0 18px 0 18px"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Graphic Designer
              </Box>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Web Development
              </Box>
            </Box>
            <Box display={"flex"} marginTop={"10px"}>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                marginLeft={"30px"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Information Security
              </Box>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                margin={"0 18px 0 18px"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Teacher
              </Box>
              <Box
                width={"30%"}
                height={"100px"}
                bgcolor={"#E5E4E2"}
                borderRadius={"6px"}
                boxShadow={"0px 4px 5px rgba(0, 0, 0, 0.2)"}
                color={"#000"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Others
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Section 2 */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={"100%"}
          height={"780px"}
          bgcolor={"#FF9966"}
        >
          <Box>
            <Typography
              variant="h3"
              //noWrap
              sx={{
                mr: 2,
                marginLeft: "120px",
                marginTop: "63%",
                marginBottom: "20px",
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
                flexGrow: 1,
                fontFamily: "Croissant One",
                fontWeight: 500,
                //letterSpacing: ".3rem",
                color: `${colors.grey[100]}`,
                textDecoration: "none",
              }}
            >
              Our client says
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"} width={"100%"}>
            {/* Image 1 */}
            <Box
              marginLeft={"3%"}
              width={"30%"}
              height={"350px"}
              borderRadius={"10px"}
              bgcolor={"#E7895B"}
              padding={"10px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box>
                <img
                  src="\image\profile1.jpg"
                  alt="Cropped Image"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box sx={{ fontWeight: "bold" }}>Emily Anderson</Box>
              <Box color={"#fff"}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Handlee",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  "Overall, I'm quite satisfied with this job board. It's been
                  an invaluable tool in my job search. I would recommend this
                  platform to other job seekers. It's efficient and
                  user-friendly.”
                </Typography>
              </Box>
            </Box>
            {/* Image 2 */}
            <Box
              margin={"0 25px 0 25px"}
              width={"30%"}
              height={"350px"}
              borderRadius={"10px"}
              bgcolor={"#E7895B"}
              padding={"10px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box>
                <img
                  src="\image\profile2.jpg"
                  alt="Cropped Image"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box sx={{ fontWeight: "bold" }}>Mitchell Nickson</Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Handlee",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  "Havin g a feature that suggests jobs based on my profile and
                  interests would be a nice addition.”
                </Typography>
              </Box>
            </Box>
            {/* Image 3 */}
            <Box
              width={"30%"}
              height={"350px"}
              borderRadius={"10px"}
              bgcolor={"#E7895B"}
              padding={"10px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box>
                <img
                  src="\image\profile3.jpg"
                  alt="Cropped Image"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box sx={{ fontWeight: "bold" }}>James White</Box>
              <Box color={"#fff"}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Handlee",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  "The search and filterin g options are robust and help me find
                  candidates with specific skills and experience."
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Section 3 */}
        <Box
          width={"100%"}
          height={"500px"}
          padding={"50px 70px"}
          display={"flex"} flexDirection={"column"} justifyContent={"space-between"}
          style={{
            position: "relative",
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95) 30%, transparent), url(https://images.pexels.com/photos/7682467/pexels-photo-7682467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box display={"flex"} margin={"40px"}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Junge",
                fontSize: "28px",
                fontWeight: 700,
                color: "#B31B1B",
                textDecoration: "none",
              }}
            >
              Job Posted 
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "arial",
                fontSize: "28px",
                fontWeight: 700,
                color: "#000",
                textDecoration: "none",
                marginLeft: "50px"
              }}
            >
              12,405 
            </Typography>
          </Box>

          <Box display={"flex"} margin={"40px"}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Junge",
                fontSize: "28px",
                fontWeight: 700,
                color: "#B31B1B",
                textDecoration: "none",
              }}
            >
              Job Applications 
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "arial",
                fontSize: "28px",
                fontWeight: 700,
                color: "#000",
                textDecoration: "none",
                marginLeft: "50px"
              }}
            >
              22,560 
            </Typography>
          </Box>

          <Box display={"flex"} margin={"40px"}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Junge",
                fontSize: "28px",
                fontWeight: 700,
                color: "#B31B1B",
                textDecoration: "none",
              }}
            >
              Companies 
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "arial",
                fontSize: "28px",
                fontWeight: 700,
                color: "#000",
                textDecoration: "none",
                marginLeft: "50px"
              }}
            >
              5863
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
