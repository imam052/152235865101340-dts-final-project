import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CarouselSlider = () => {
  return (
    <Carousel
      sx={{ height: "80vh" }}
      IndicatorIcon={false}
      stopAutoPlayOnHover={false}
      interval={4000}
    >
     <Card sx={{ }}>
      <CardMedia
        component="img"
        height="140"
        image="https://github.com/imam052/152235865101340-dts-final-project/blob/main/src/assets/header.png"
        alt="Header"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Carousel>
  );
}

export default CarouselSlider;
