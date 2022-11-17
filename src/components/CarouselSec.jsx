import { useContext } from "react";
// import Carousel from "styled-components-carousel";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import { BlogContext } from "../context/Blogs";
import "react-multi-carousel/lib/styles.css";

export const Heading = styled.h1`
  color: #045d51;
  font-family: sans-serif;
  margin: 100px auto;
  text-align: center;
  font-size: 30px;
  max-width: 600px;
  position: relative;
  margin-bottom: 40px;
  &:before {
    content: "";
    display: block;
    width: 35%;
    height: 2px;
    background: black;
    left: 0;
    top: 50%;
    position: absolute;
  }
  &:after {
    content: "";
    display: block;
    width: 35%;
    height: 2px;
    background: black;
    right: 0;
    top: 50%;
    position: absolute;
  }
`;
const P = styled.p`
  color: #045d51;
`;
const Description = styled.p`
    color: black
    width: 70%;
    margin-left: 15%;
`;
const H2 = styled.h2`
  color: black;
  margin-left: 15%;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  box-sizing: border-box;
`;
const Image = styled.img`
  width: 40vw;
  height: 40vh;
  display: flex;
  align-items: center;
`;
const AllTags = styled.div`
  display:flex;
  align-content: flex-start;
`;
const Tags = styled.div`
  width: 10vw;
  height: 5vh;
  border: 1px solid #045d51;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function CarouselSec(props) {
  const { Blogs } = useContext(BlogContext);
  console.log(Blogs);
  return (
    <>
      <Heading>{props.heading}</Heading>
      <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {Blogs.slice(0, 10).map(
          (blogs, index) =>
            index < 10 && (
              <>
                <Container key={blogs.id}>
                  <Image alt={blogs.featuredImage.altText} src={blogs.featuredImage.link} />
                  <P>Places</P>
                  <H2>{blogs.title}</H2>
                  <Description>{blogs.meta.description}</Description>
                  <AllTags>
                    {Blogs[0].tags.slice(0, 2).map((tags) => {
                      return (
                        <Tags>
                          <P>{tags.name}</P>
                        </Tags>
                      );
                    })}
                  </AllTags>
                  <P>{new Date(blogs.date).toDateString()}</P>
                </Container>
              </>
            )
        )}
      </Carousel>
    </>
  );
}
export default CarouselSec;
