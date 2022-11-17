import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SocialContainer = styled.div`
  background: #eee;
  padding: 50px 50px;
  display: flex;
  justify-content: center;
`;
const AddressBox = styled.div`
  padding: 5px 50px;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;
  height: 40vh;
  color: gray;
`;
const SocialLink = styled(Link)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
`;

const SocialFooter = () => {
  return (
    <>
      <SocialContainer>
        <SocialLink href="https://www.youtube.com/c/wanderon">
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faYoutube}
            size="3x"
          />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/wanderOn/">
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faFacebook}
            size="3x"
          />
        </SocialLink>
        <SocialLink href="https://www.twitter.com/wanderOn">
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faTwitter}
            size="3x"
          />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/wanderOn">
          <FontAwesomeIcon
            style={{ color: "black" }}
            icon={faInstagram}
            size="3x"
          />
        </SocialLink>
      </SocialContainer>
      <AddressBox>
        <h2>ADDRESS</h2>
        <h3>WANDERON EXPERIENCES PVT LTD</h3>
        <p>3rd Floor, Building No-750, Phase V, Udyog Vihar, Sector-19, Gurugram, Haryana-122022</p>
      </AddressBox>
    </>
  );
};

export default SocialFooter;
