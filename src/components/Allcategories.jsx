import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  width: 97.5%;
  background-color: #f2f7f6;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 10vh;
  padding: 0.25em 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    overflow-x: scroll;
  }
`;
export const CategoryBtn = styled.button`
  background: ${(props) => (props.more ? "#045d51" : "white")};
  color: ${(props) => (props.more ? "white" : "#045d51")};
  font-size: 1em;
  height: 7vh;
  padding: 0.25em 1em;
  border: 2px solid  ${(props) => (props.more ? "#045d51":"white")};
  border-radius: 5px;
  z-index: 3;
  cursor: pointer;
  margin-right: 50px;
  outline: 0.5px solid #045d51;
  &:hover {
    background-color: #034a41;
    color: white;
  }
`;

const Allcategories = () => {
  return (
    <CategoryContainer>
      <CategoryBtn>Trips</CategoryBtn>
      <CategoryBtn>Food</CategoryBtn>
      <CategoryBtn>Hotels</CategoryBtn>
      <CategoryBtn>Places</CategoryBtn>
      <CategoryBtn>Adventure</CategoryBtn>
      <CategoryBtn>Workcation</CategoryBtn>
      <CategoryBtn more>More</CategoryBtn>
    </CategoryContainer>
  );
};

export default Allcategories;
