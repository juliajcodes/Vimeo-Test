import React from "react";
import styled from "styled-components";

const RowContent = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${props => props.flexDirection || "row"};

  @media only screen and (min-width: 1250px) {
    flex-wrap: nowrap;
    padding: 20px 0;
  }

  @media only screen and (min-width: 750px) {
    flex-wrap: wrap;
    padding: 20px 30px;
  }
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto 50px auto;
  max-width: 800px;

  @media only screen and (min-width: 1250px) {
    width: 47%;
  }

  h1,
  p {
    margin: 5px 0;
  }

  p {
    line-height: 20px;
  }

  h1 {
    text-transform: uppercase;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 0 auto;
  max-width: unset;

  @media only screen and (min-width: 750px) {
    max-width: 600px;
  }

  @media only screen and (min-width: 1250px) {
    max-width: unset;
  }
`;

function Row(props) {
  return (
    <RowContent flexDirection={props.flexDirection}>
      <Column>
        <h1>{props.headingText}</h1>
        <p>{props.paragraphText}</p>
      </Column>
      <Column>
        <Image src={props.imageSource} alt={props.altText} />
      </Column>
    </RowContent>
  );
}

export default Row;
