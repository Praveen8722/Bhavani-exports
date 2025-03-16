import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #00d2ff, #3a7bd5)",
        py: 4,
        mt: 12,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: "#f4501e", p: 3, mb: 4,maxWidth:'sm',ml:{xs:'0',md:'18rem'},mt:'-5rem'}}>
          <Typography variant="h6" color="white" mb={2}>
            Contact Us
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    sx={{
                      color: "#fff",
                      bgcolor: "#f4501e",
                      borderRadius: 0,
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { backgroundColor: "white", color: "black" },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 4, mb: 4 }}>
          <Box>
            <Typography variant="h6" color="white" gutterBottom>
              START A PROJECT
            </Typography>
            <Typography variant="body1" color="white">
              We are ready for the <br />
             praveenreddy@mail.com 
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="white" gutterBottom>
              SAY HELLO
            </Typography>
            <Typography variant="body1" color="white">
              497 Evergreen Rd. Roseville,<br />
              CA 95673
              +344 345 678 903
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="white" gutterBottom>
              JOBS
            </Typography>
            <Typography variant="body1" color="white">
              We are always looking for<br />
              praveen@mail.com
            </Typography>
          </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: {xs:0,md:-10},mr:{xs:1,md:0} }}>
          <IconButton sx={{ color: 'white' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <FacebookIcon />
          </IconButton>
        </Box>
        </Box>

      
      </Container>
    </Box>
  );
};

export default Footer;
