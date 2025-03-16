import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  Divider,
  Card,
  CardContent,
  Paper,
  Avatar,
} from "@mui/material";
import image3 from "../assets/img/image3.png";
import image6 from "../assets/img/image6.png";
import image5 from "../assets/img/image5.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import cardimg2 from "../assets/img/cardimg2.png";

const Products = () => {
  return (
    <Box
      item
      xs={12}
      md={6}
      sx={{
        mt: { xs: "0", md: "2rem" },
        pt:{xs:'6rem',md:'6.3rem'}
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
            mb: 3,
          }}
        >
          Our Process
          <Divider
            sx={{
              width: { xs: "21rem", md: "21rem" },
              bgcolor: "#0D5BAF",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#133D67",
          height: { xs: "300px", sm: "400px", md: "500px" },
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={image3}
          sx={{
            width: { xs: "100%", sm: "80%", md: "1000px" },
            height: { xs: "auto", sm: "auto", md: "100%" },
            objectFit: "cover",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
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
          Our Clints
          <Divider
            sx={{
              width: { xs: "18rem", md: "18rem" },
              bgcolor: "#0D5BAF",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: "40vh", sm: "50vh", md: "60vh" },
          backgroundImage: `url(${image6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "1.8rem", sm: "5rem", md: "10rem" },
          }}
        >
          <Box
            sx={{
              bgcolor: "#FE7F4C",
              borderRadius: "50%",
              width: { xs: "2.5rem", sm: "3rem" },
              height: { xs: "2.5rem", sm: "3rem" },
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: { xs: "-1rem", sm: "-5rem" },
            }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </Box>

          <Card
            sx={{
              width: { xs: "7rem", sm: "25rem", md: "30rem" },
              height: { xs: "9rem", sm: "auto", md: "auto" },
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <CardContent sx={{ fontSize: { xs: "8px", md: "1rem" } }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolorem perferendis adipisci in mollitia tempore, repellendus
              suscipit consequatur obcaecati delectus tempora ipsum iure iste
              magnam ipsa ipsam beatae soluta officiis?
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#FE7F4C",
                  m: "0.5rem",
                  fontSize: { xs: "8px", md: "1rem" },
                }}
              >
                Praveen Reddy
              </Typography>
            </CardContent>
          </Card>
          <Avatar
            alt="Praveen Reddy"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: { xs: 50, sm: 120 },
              height: { xs: 50, sm: 120 },
              ml: { xs: "-6rem", sm: "-16rem", md: "-19rem" },
              mt: { xs: "-12rem", sm: "10rem" },
            }}
          />

          <Card
            sx={{
              width: { xs: "7rem", sm: "25rem", md: "30rem" },
              height: { xs: "9rem", sm: "auto", md: "auto" },
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <CardContent sx={{ fontSize: { xs: "8px", md: "1rem" } }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolorem perferendis adipisci in mollitia tempore, repellendus
              suscipit consequatur obcaecati delectus tempora ipsum iure iste
              magnam ipsa ipsam beatae soluta officiis?
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#FE7F4C",
                  m: "0.5rem",
                  fontSize: { xs: "8px", md: "1rem" },
                }}
              >
                Praveen Reddy
              </Typography>
            </CardContent>
          </Card>
          <Avatar
            alt="Praveen Reddy"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: { xs: 50, sm: 120 },
              height: { xs: 50, sm: 120 },
              ml: { xs: "-6rem", sm: "-16rem", md: "-19rem" },
              mt: { xs: "-12rem", sm: "10rem" },
            }}
          />

          <Box
            sx={{
              bgcolor: "#FE7F4C",
              borderRadius: "50%",
              width: { xs: "2.5rem", sm: "3rem" },
              height: { xs: "2.5rem", sm: "3rem" },
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: { xs: "0", sm: "-5rem" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
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
          Our Company Has Been Registered With:
          <Divider
            sx={{
              width: { xs: "18rem", md: "72rem" },
              bgcolor: "#0D5BAF",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          />
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "#F5F5F5",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap:{xs:'0',md:'10rem'},
            p:'1rem'
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}  >
            <Card
              sx={{
                borderRadius: "5px",
                width: { xs: "100%", md: "27rem" },
                mt: { xs: "2rem", md: 0 },
              }} >
              <CardContent sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image={cardimg2}
                  sx={{ width: 100, height: 100, borderRadius: "5px" }}  />
                <Box sx={{ ml: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    Lerom ispome
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "600", fontSize: "13px", color: "grey" }} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus voluptati corporis corporiscorporis
                    perspiciatis.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: "5px",
                width: { xs: "100%", md: "27rem" },
                mt: { xs: "4rem", md: "10rem" },
              }} >
              <CardContent sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image={cardimg2}
                  sx={{ width: 100, height: 100, borderRadius: "5px" }} />
                <Box sx={{ ml: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    Lerom ispome
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "600", fontSize: "13px", color: "grey" }} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus voluptati corporis corporiscorporis
                    perspiciatis.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }} >
            <Card
              sx={{
                borderRadius: "5px",
                width: { xs: "100%", md: "27rem" },
                mt: { xs: "4rem", md: 0 },
              }} >
              <CardContent sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image={cardimg2}
                  sx={{ width: 100, height: 100, borderRadius: "5px" }}  />
                <Box sx={{ ml: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    Lerom ispome
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "600", fontSize: "13px", color: "grey" }}  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus voluptati corporis corporiscorporis
                    perspiciatis.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: "5px",
                width: { xs: "100%", md: "27rem" },
                mt: { xs: "4rem", md: "10rem" },
              }}  >
              <CardContent sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image={cardimg2}
                  sx={{ width: 100, height: 100, borderRadius: "5px" }}   />
                <Box sx={{ ml: "1rem" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                    Lerom ispome
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "600", fontSize: "13px", color: "grey" }}  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus voluptati corporis corporiscorporis
                    perspiciatis.
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

export default Products;
