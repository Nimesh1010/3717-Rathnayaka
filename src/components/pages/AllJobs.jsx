import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material"; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TopBar from "../navbar/TopBar";
import Footer from "../navbar/Footer";

const AllJobs = () => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    axios
      .get("your-backend-api-endpoint")
      .then((response) => {
        // Assuming the response contains data in the format { image, title, location, time }
        setJobData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
      });
  }, []);

  return (
    <Box>
      <TopBar />
      <Box minHeight={"100vh"} marginTop={"4.9%"}>

        {/* Selection */}
        <Box
          bgcolor={"#999"}
          width={"100%"}
          height={"10vh"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* Job title*/}
          <Box
            bgcolor={"#888"}
            width={"18%"}
            height={"50px"}
            marginLeft={"20px"}
          ></Box>
          {/* Job location*/}
          <Box bgcolor={"#888"} width={"18%"} height={"50px"}></Box>
          {/* Job category*/}
          <Box bgcolor={"#888"} width={"18%"} height={"50px"}></Box>
          {/* All type*/}
          <Box bgcolor={"#888"} width={"18%"} height={"50px"}></Box>
          {/* Search */}
          <Box
            bgcolor={"#888"}
            width={"4%"}
            height={"50px"}
            marginRight={"20px"}
          ></Box>
        </Box>

        {/* Jobs */} 
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>

          {/* 1 */}
          <Box
            bgcolor={"#FFE5B4"}
            height={"80px"}
            width={"80%"}
            borderRadius={"7px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            margin={"10px"}
          >
            {/* Title */}
            <Box
              width={"40%"}
              height={"60px"}
              bgcolor={"#fff"}
              marginLeft={"10px"}
              borderRadius={"5px"}
              display={"flex"} alignItems={"center"} padding={"10px"}
            >
              <Box
                width={"15%"}
                height={"45px"}
                bgcolor={"#d2d2d2"}
                margin={"2px 5px "}
              >
                {/* jobData.image */}image
              </Box>
              <Box>
              <Typography  sx={{margin: "0 30px"}}>
                {/*jobData.title*/} UI Designer
                </Typography>
              </Box>
            </Box>
            {/* Location */}
            <Box
              width={"25%"}
              height={"60px"}
              bgcolor={"#fff"}
              borderRadius={"5px"}
              padding={"3px 10px"}
              display={"flex"}
              alignItems={"center"}
            >
              <LocationOnIcon />
              <Typography  sx={{margin: "0 50px"}}>{/* jobData.location */}Colombo</Typography>  
               
              </Box>
            {/* Time */}
            <Box
              width={"15%"}
              height={"60px"}
              bgcolor={"#fff"}
              marginRight={"10px"}
              borderRadius={"5px"}
              padding={"10px"}
              display={"flex"} alignItems={"center"}
            >{/* jobData.time */}2 days ago</Box>
          </Box>

          {/* 2 */}
          <Box
            bgcolor={"#FFE5B4"}
            height={"80px"}
            width={"80%"}
            borderRadius={"7px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            margin={"10px"}
          >
            {/* Title */}
            <Box
              width={"40%"}
              height={"60px"}
              bgcolor={"#fff"}
              marginLeft={"10px"}
              borderRadius={"5px"}
              display={"flex"} alignItems={"center"} padding={"10px"}
            >
              <Box
                width={"15%"}
                height={"45px"}
                bgcolor={"#d2d2d2"}
                margin={"2px 5px "}
              >
                {/* jobData.image */}image
              </Box>
              <Box>
              <Typography  sx={{margin: "0 30px"}}>
                {/*jobData.title*/} UI Designer
                </Typography>
              </Box>
            </Box>
            {/* Location */}
            <Box
              width={"25%"}
              height={"60px"}
              bgcolor={"#fff"}
              borderRadius={"5px"}
              padding={"3px 10px"}
              display={"flex"}
              alignItems={"center"}
            >
              <LocationOnIcon />
              <Typography  sx={{margin: "0 50px"}}>{/* jobData.location */}Colombo</Typography>  
               
              </Box>
            {/* Time */}
            <Box
              width={"15%"}
              height={"60px"}
              bgcolor={"#fff"}
              marginRight={"10px"}
              borderRadius={"5px"}
              padding={"10px"}
              display={"flex"} alignItems={"center"}
            >{/* jobData.time */}2 days ago</Box>
          </Box>
           
        </Box>
         
      </Box>
      <Footer />
    </Box>
  );
};

export default AllJobs;


// function JobsList() {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     // Fetch job data from the backend
//     async function fetchJobs() {
//       try {
//         const response = await axios.get('your-backend-api-endpoint');
//         const sortedJobs = response.data.sort((a, b) => new Date(b.timePosted) - new Date(a.timePosted));
//         setJobs(sortedJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     }

//     fetchJobs();
//   }, []);

//   return (
//     <div>
//       {jobs.map((job) => (
//         <Box
//           key={job.id}
//           width={"100%"}
//           height={"100px"}
//           bgcolor={"#fff"}
//           borderRadius={"5px"}
//           marginBottom={"10px"}
//           padding={"10px"}
//         >
//           <Typography variant="h6">{job.title}</Typography>
//           <Typography>{job.location}</Typography>
//           <Typography>{job.timePosted}</Typography>
//           {/* Add more Typography components for other job details */}
//         </Box>
//       ))}
//     </div>
//   );
// }
