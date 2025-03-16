import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  Button,
  Divider,
} from "@mui/material";
import image4 from "../assets/img/image4.png";
import image8 from "../assets/img/image8.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import image9 from "../assets/img/image9.png";
import cardimg from "../assets/img/cardimg.png";

const AboutUs = () => {
  const [swapImages, setswapImages] = useState(false);

  const handleButtonClick = () => {
    setswapImages(!swapImages);
  };

  return (
    <Box sx={{
      pt:{xs:9,md:0} ,
    }}>
      <Card
        sx={{
          display: "flex",
          bgcolor: "#DEFCEC",
          p: "2rem",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          item
          xs={12}
          md={6}
          sx={{
            ml: { xs: "rem", md: "13rem" },
            mt: { xs: "2rem", md: "7rem" },
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              image={swapImages ? image4 : image8}
              sx={{ width: 300, height: 300 }}
            />
            <CardMedia
              component="img"
              image={swapImages ? image8 : image4}
              sx={{
                width: 270,
                height: 350,
                mt: { xs: "-20.5rem", md: "-21rem" },
                ml: { xs: "2rem", md: "2rem" },
              }}
            />
          </CardContent>
          <Button
            variant="contained"
            color="warning"
            sx={{ ml: { xs: "0", md: "18rem" }, mt: { xs: "0", md: "-7rem" } }}
            onClick={handleButtonClick}
          >
            <ArrowForwardIcon />
          </Button>
        </Box>
        <Box
          item
          xs={12}
          md={6}
          sx={{
            width: { xs: "20rem", md: "33rem" },
            mt: { xs: "0", md: "5rem" },
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "600",
              fontStyle: "italic",
              fontFamily: "cursive",
              color: "#FE7F4C",
              mb: 3,
            }}
          >
            About Us
            <Divider
              sx={{
                width: { xs: "11rem", md: "11rem" },
                bgcolor: "#0D5BAF",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            />
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FE7F4C", color: "white" }}
          >
            Read More
            <NavigateNextIcon />
          </Button>
        </Box>
      </Card>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          mt: { xs: "0", md: "2rem" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "600",
            fontStyle: "italic",
            fontFamily: "cursive",
            color: "#FE7F4C",
            mb: 4,
          }}
        >
          Why Choose Bhawani Exports
          <Divider
            sx={{
              width: { xs: "21rem", md: "53rem" },
              bgcolor: "#0D5BAF",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          />
        </Typography>
      </Box>
      <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${image9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '2rem', md: '20rem' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{ borderRadius: '5px', width: { xs: '100%', md: '27rem' }, mt: { xs: '4rem', md: 0 } }}>
            <CardContent sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                image={cardimg}
                sx={{ width: 100, height: 100, borderRadius: '5px' }}
              />
              <Box sx={{ ml: '1rem' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Lerom ispome</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'grey' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptati corporis corporiscorporis  perspiciatis.
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: '5px', width: { xs: '100%', md: '27rem' }, mt: { xs: '4rem', md: '10rem' } }}>
            <CardContent sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                image={cardimg}
                sx={{ width: 100, height: 100, borderRadius: '5px' }}
              />
              <Box sx={{ ml: '1rem' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Lerom ispome</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'grey' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptati corporis corporiscorporis  perspiciatis.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{ borderRadius: '5px', width: { xs: '100%', md: '27rem' }, mt: { xs: '2rem', md: 0 } }}>
            <CardContent sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                image={cardimg}
                sx={{ width: 100, height: 100, borderRadius: '5px' }}
              />
              <Box sx={{ ml: '1rem' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Lerom ispome</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'grey' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptati corporis corporiscorporis  perspiciatis.
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ borderRadius: '5px', width: { xs: '100%', md: '27rem' }, mt: { xs: '4rem', md: '10rem' } }}>
            <CardContent sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                image={cardimg}
                sx={{ width: 100, height: 100, borderRadius: '5px' }}
              />
              <Box sx={{ ml: '1rem' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Lerom ispome</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '13px', color: 'grey' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus voluptati corporis corporiscorporis  perspiciatis.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default AboutUs;
