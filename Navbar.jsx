import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Phone as PhoneIcon, Email as MailIcon } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import image1 from "../assets/img/image1.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Process from "./Process";
import ContactUs from "./ContactUs";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle smooth scrolling
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box id="home" sx={{ pt: "auto", m: "auto"  }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          color: "primary.main",
          p: "auto",
          m: "auto",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Phone Number */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon />
            <Typography variant="body1">+6282179410083</Typography>
          </Box>

          {/* Email */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MailIcon onClick={() => setIsDrawerOpen(true)} />
            <Typography variant="body1">example@gmail.com</Typography>
          </Box>
        </Toolbar>

        <Box
          sx={{
            backgroundColor: "#10B39E",
            color: "#fff",
            mt: { xs: "0", md: "-1rem" },
            px: { xs: 2, md: 20 },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#fff",
                height: "4rem",
                width: { xs: "9rem", md: "10rem" },
                justifyContent: "center",
                ml: { xs: 0, md: -20 },
              }}
            >
              <Typography variant="h3" color="#0D5BAF">
                LOGO
              </Typography>
            </Box>

            {/* Mobile Menu Icon */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Menu Items */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: { md: 4, lg: 10 },
                "& button": {
                  fontSize: { md: "14px", lg: "20px" },
                  ml: "2rem",
                },
              }}
            >
              <Button
                color="inherit" onClick={() => handleScrollToSection("home")} >  {" "}Home{" "} </Button>
              <Button
                color="inherit" onClick={() => handleScrollToSection("about")} >{" "} About Us{" "}  </Button>
              <Button
                color="inherit" onClick={() => handleScrollToSection("products")} > Product </Button>
              <Button
                color="inherit" onClick={() => handleScrollToSection("process")} > Process  </Button>
              <Button
                color="inherit" onClick={() => handleScrollToSection("contactUs")} > Contact </Button>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

   {/* Drawer for Mobile Menu */}
<Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
  <List>
    {[
      { text: "Home", id: "home" },
      { text: "About Us", id: "about" },
      { text: "Product", id: "products" },
      { text: "Process", id: "process" },
      { text: "Contact", id: "contactUs" }
    ].map(({ text, id }) => (
      <ListItem
        button
        key={id}
        id={id}
        onClick={() => {
          handleScrollToSection(id);
          handleDrawerToggle();
        }}
      >
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Drawer>



      <Box
        
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: "-2rem", md: "0" },
        }}
      >
        <Box sx={{ textAlign: "center", mb: "8rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "600",
              fontStyle: "italic",
              fontFamily: "cursive",
              color: "#fff",
              mb: 3,
            }}
          >
            Welcome to Bhavani Exports
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "500",
              fontStyle: "italic",
              fontFamily: "cursive",
              color: "#fff",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FE7F4C", color: "white", mt: "5rem" }}
          >
            Read More
            <NavigateNextIcon />
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about">
        <AboutUs />
      </Box>

      {/* Products Section */}
      <Box id="products">
        <Products />
      </Box>

      {/* Process Section */}
      <Box id="process">
        <Process />
      </Box>

      {/* ContactUs Section */}
      <Box id="contactUs">
        <ContactUs />
      </Box>
    </Box>
  );
};

export default Navbar;
