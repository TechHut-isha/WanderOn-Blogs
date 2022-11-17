import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    background: #eee;
    height: 10vh;
    margin-top: 50px;
    padding: 10px;
    box-sizing: border-box;
`;
const TestimonialContainer = styled.div`
  height: 50vh;
  background: #eee;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media(max-width:700px){
   display: block;
   height: 100%;
  }
`;
const H1 = styled.h1`
  color: #045d51;
  text-align: center;
`;

const ReviewBox = styled.div`
  width: 20%;
  height: 20vh;
  border: 1px solid silver;
  border-radius: 50px;
  box-shadow: 12px 10px gray;
  background-color: #EAEEE0;
  padding: 20px;
  margin: 50px;
  @media(max-width:700px){
    overflow: hidden;
    width: 50%;
  }
`;
const Testimonial = () => {
  return (
    <>
    <Container>
    <H1>Testimonials</H1>
    </Container>
    <TestimonialContainer>

      <ReviewBox>
        <p>
          wanderOn is one of the best communities. I have ever travelled with.
        </p>
        <h5>Reviewd by: Jack</h5>
      </ReviewBox>
      <ReviewBox>
        <p>
          wanderOn is one of the best communities. I have ever travelled with.
        </p>
        <h5>Reviewd by: Happy</h5>
      </ReviewBox>
      <ReviewBox>
        <p>
          wanderOn is one of the best communities. I have ever travelled with.
        </p>
        <h5>Reviewd by: Janny</h5>
      </ReviewBox>
    </TestimonialContainer>
    </>
  );
};

export default Testimonial;
