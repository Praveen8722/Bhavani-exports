import React from "react";
import { Box, Typography, CardMedia, Divider } from "@mui/material";
import image2 from '../assets/img/image2.png';
import image5 from '../assets/img/image5.png';
import image9 from '../assets/img/image9.png';

const Products = () => {
  return (
    <Box
      item
      xs={12}
      md={6}
      sx={{
        // mt: { xs: "1rem", md: "2rem" },
        px: { xs: "1rem", md: "2rem" } ,
        pt:{xs:'2rem',md:'6.3rem'}
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "600",
            fontStyle: "italic",
            fontFamily: "cursive",
            color: "#FE7F4C",
            // mb: 3,
            textAlign: "center" 
          }}
        >
          Featured Products
          <Divider
            sx={{
              width: { xs: "15rem", md: "32rem" }, 
              bgcolor: "#0D5BAF",
              borderWidth: "2px",
              borderStyle: "solid",
              mx: "auto" 
            }}
          />
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", gap: '1rem' }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center',
            gap: '1rem',
            bgcolor: '#16C98D',
            width: { xs: '60%', sm: '80%', md: '40%' }, 
            height: { xs: 'auto', sm: '250px', md: '270px' },
            p: { xs: '1rem', md: '2rem' } 
          }}
        >
          <CardMedia
            component="img"
            image={image2}
            sx={{ width: { xs: '100px', sm: '150px', md: '300px' }, height: { xs: '100px', sm: '150px', md: '300px' } }}
          />
          <CardMedia
            component="img"
            image={image9}
            sx={{ width: { xs: '100px', sm: '150px', md: '300px' }, height: { xs: '100px', sm: '150px', md: '300px' } }}
          />
          <CardMedia
            component="img"
            image={image5}
            sx={{ width: { xs: '100px', sm: '150px', md: '300px' }, height: { xs: '100px', sm: '150px', md: '300px' } }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
