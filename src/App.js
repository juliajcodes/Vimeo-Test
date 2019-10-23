import React from "react";
import styled from "styled-components";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import Carousel from "./components/Carousel";
import Row from "./components/Row";

// I was able to connect to the Vimeo API, but didn't recieve my upload acceptance in time to replace the static information.
let Vimeo = require("vimeo").Vimeo;
let access_token = "cfc5c3fc3109845c88472b933560e416";
let client_id = "49b0ebf15bab1e7237687dbe22f0055ccb41f096";
let client_secret =
  "+h0TNlGiSUjyhWyvH4pBZEkl5vrwWEWyxGHzLa9/iTuldeheceS2xu7x2hjM8pdjgiDOfnbCDOkU2dWgqbaSRRaEJe/Xa1mzTbJEEZTmPSZKAFNh+9aWzV2Kf5VHIUrk";

let client = new Vimeo(client_id, client_secret, access_token);

client.request(
  {
    method: "GET",
    path: "/tutorial"
  },
  function(error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }
  }
);
// end vimeo api

const LayoutWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Layout = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 90px 0;
`;

const ColorWrap = styled.div`
  width: 100%;
  background: rgb(91, 91, 91);
  background: linear-gradient(
    180deg,
    rgba(91, 91, 91, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );
  color: white;
`;

function App() {
  return (
    <LayoutWrap>
      <Layout>
        <Row
          flexDirection="row-reverse"
          imageSource={image1}
          headingText="Monsoon III"
          paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Layout>
      <ColorWrap>
        <Layout>
          <Row
            imageSource={image3}
            headingText="Beams"
            paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Row
            flexDirection="row-reverse" // passed direction as a prop to flip content
            imageSource={image2}
            headingText="Move 2"
            paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Layout>
      </ColorWrap>
      <Carousel />
    </LayoutWrap>
  );
}

export default App;
