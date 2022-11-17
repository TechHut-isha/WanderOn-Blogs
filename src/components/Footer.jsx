import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialFooter from "./SocialFooter";

const FContainer = styled.div`
  width: 100%;
  background-color: #045d51;
  height: 60vh;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  @media (max-width: 700px) {
    display: block;
    height: 80%;
  }
`;
const Info = styled.div`
  width: ${(props) => (props.other ? "25%" : "30%")};
  height: 50vh;
  border-right: ${(props) => (props.last ? "none" : "1px solid white")};
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    border-right: none;
  }
`;
const H3 = styled.h3`
  color: white;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 12px;
`;

const FooterLinks = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgray;
  }
`;

const P = styled.p`
  color: white;
  font-size: 12px;
  line-height: 1;
`;
const Footer = () => {
  return (
    <>
      <FContainer>
        <Info>
          <H3>About Us</H3>
          <P>
            We at WanderOn are a modern travel community that provides end to
            end travel packages in India and abroad. We design the best travel
            itineraries that encourage group traveling for like-minded people.
            Our services include road trips, trekking expeditions, corporate
            trips, and customized tour packages. On our trips, we ensure
            hassle-free traveling, top-notch accommodation and guided
            sightseeing that too in a budget that won’t burn a hole in your
            pocket. Just give us your dates and be ready to experience traveling
            like never before.
          </P>
        </Info>
        <Info other>
          <H3>Weekend Trips</H3>
          <Ul>
            <li>
              <FooterLinks to="/Bir Billingy">Bir Billing </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Chopta Tungnath">Chopta Tungnath </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Kasol">Kasol </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Kheerganga">Kheerganga </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Tirthan Valley">Tirthan Valley </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Manali Solang">Manali Solang</FooterLinks>
            </li>
          </Ul>
          <H3>Himalyan Escape</H3>
          <Ul>
            <li>
              <FooterLinks to="/kasol Manali">kasol Manali</FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Parvati Valley">Parvati Valley</FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Bir Kasol">Bir Kasol</FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Mcleod Bir Tirthan">
                Mcleod Bir Tirthan
              </FooterLinks>
            </li>
          </Ul>
        </Info>
        <Info other>
          <H3>Backpacking Trips</H3>
          <Ul>
            <li>
              <FooterLinks to="/Himachal Backpacking">
                Himachal Backpacking
              </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Spiti Valley Trips">
                Spiti Valley Trips
              </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Ladakh Trips">Ladakh Trips</FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Meghalaya Backpacking">
                Meghalaya Backpacking
              </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Kashmir Backpacking">
                Kashmir Backpacking
              </FooterLinks>
            </li>
          </Ul>
          <H3>Blogs</H3>
          <P>
            Beautiful Places to Visit in Spring in India Workcations: The New
            Trend of Travel Breathtaking Monasteries of Ladakh Soul-Satisfying
            things to do in Spiti Valley Mesmerising Waterfalls of Meghalaya to
            Visit
          </P>
        </Info>
        <Info last other>
          <H3>Quick Links</H3>
          <Ul>
            <li>
              <FooterLinks to="/PrivacyPolicy">Privacy Policy</FooterLinks>
            </li>
            <li>
              <FooterLinks to="/CancellationPolicy">
                Cancellation Policy
              </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Terms & Conditions">
                Terms & Conditions
              </FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Disclaimer">Disclaimer</FooterLinks>
            </li>
            <li>
              <FooterLinks to="/Disclaimer">About Us</FooterLinks>
            </li>
          </Ul>
        </Info>
      </FContainer>
      <SocialFooter />
    </>
  );
};

export default Footer;
