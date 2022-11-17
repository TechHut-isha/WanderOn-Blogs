import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #033d35;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;
const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 50%;
`;
const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;
const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
const NavbarLinkContainer = styled.div`
  display: flex;
`;
const NavbarLink = styled(Link)`
  color: #d4dddb;
  font-size: x-medium;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;
const NavbarLinkExtended = styled(Link)`
  color: #d4dddb;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
const Logo = styled.img`
  max-width: 100px;
  height: auto;
`;
const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #d4dddb;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCLjTzU1byyvinj10carR1tDEPc7Qff5tCyDAaEWPuBjgZA3M"></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/DiwaleSale">Diwale Sale</NavbarLink>
            <NavbarLink to="/InternationalTrips">
              International Trips
            </NavbarLink>
            <NavbarLink to="/Blogs">Blogs</NavbarLink>
            <NavbarLink to="/About"> About Us</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/DiwaleSale">Diwale Sale</NavbarLinkExtended>
          <NavbarLinkExtended to="/InternationalTrips"> International Trips</NavbarLinkExtended>
          <NavbarLinkExtended to="/Blogs"> Blogs</NavbarLinkExtended>
          <NavbarLinkExtended to="/About"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
