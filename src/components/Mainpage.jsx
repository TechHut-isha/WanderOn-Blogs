import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Allcategories from "./Allcategories";
import CarouselComponent from "./CarouselComponent";
import CarouselSec from "./CarouselSec";
import LoadMore from "./LoadMore";
import Testimonial from "./Testimonial";

const Header = styled.div`
  width: 100%;
  background-color: #045d51;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Imagediv = styled.div`
  background-image: url("https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2020/01/02173546/GettyImages-1155613712-1.jpg");
  height: 40vh;
  width: 70%;
  z-index: 1;
  opacity: 0.8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 10px #000000;
`;
const Heading = styled.h1`
    font-family: 'Great Vibes', cursive;
    color: #f6f9f9;
    font-size: 60px;
`;

const Mainpage = () => {
  return (
    <>
      <Header>
        <Heading>Blogs</Heading>
        <Imagediv />
        <Searchbar />
      </Header>
      <Allcategories />
      <CarouselComponent heading="Featured" />
      <CarouselSec heading="Latest" />
      <CarouselSec heading="Trending" />
      <CarouselSec heading="Trips" />
      <CarouselSec heading="Honeymoon" />
      <LoadMore />
      <Testimonial />
    </>
  );
};

export default Mainpage;
