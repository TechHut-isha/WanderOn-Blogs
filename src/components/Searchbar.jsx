import React from "react";
import styled from "styled-components";

// const SearchContainer = styled.div`
//     height: 5vh;
//     width: 100%;
//     display: block;
//     margin: auto
// `;
const SearchInput = styled.input`
  width: 40vw;
  height: 5vh;
  z-index: 2;
  position: relative;
  bottom: 20px;
  font-size: 14px;
  line-height: 1;
  border: none;
  outline: 1px solid #045d51;
  border-radius: 5px;
  padding: 5px 10px;
`;
const SearchBtn = styled.button`
  background: ${props => props.primary ? "#045d51" : "white"};
  color: ${props => props.primary ? "white" : "#045d51"};
  font-size: 1em;
  height: 7vh;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 5px;
  position: relative;
  bottom: 20px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  &:hover{
    background-color: #034a41;
  }
`;

const Searchbar = () => {
  return (
    // <SearchContainer><SearchInput /></SearchContainer>
    <div>
      <SearchInput placeholder="🔍 Search..." />
      <SearchBtn primary>Search</SearchBtn>
    </div>
  );
};

export default Searchbar;
