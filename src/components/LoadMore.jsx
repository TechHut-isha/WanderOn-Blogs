import React from "react";
import styled from "styled-components";
import { CategoryBtn } from "./Allcategories";

const Load = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
`;

const LoadMore = () => {
  return (
    <Load>
      <CategoryBtn more>Load More</CategoryBtn>;
    </Load>
  );
};

export default LoadMore;
