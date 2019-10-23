import React from "react";
import styled from "styled-components/macro";
import play from "../images/play.svg";

const DisplayInline = styled.div`
  display: inline-block;
`;

const MovieContent = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;

  @media only screen and (min-width: 959px) {
    flex-wrap: nowrap;
    padding: 20px;
    margin: 0 80px;
  }
`;

const MovieImage = styled.img`
  width: 90%;
  margin: 0 auto;
  max-width: 400px;

  @media only screen and (min-width: 959px) {
    width: 400px;
  }
`;

const MovieDescription = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 600px;

  @media only screen and (min-width: 959px) {
    width: unset;
    margin: 70px 0 0 40px;
  }

  h1,
  p {
    padding-bottom: 10px;
  }

  p {
    color: lightgray;
    max-width: 700px;
  }

  button {
    background-color: rgb(49, 157, 229, 100);
    padding: 9px 15px;
    border: 1px solid #319de5;
    border-radius: 3px;
    font-weight: 500;
    color: white;
    margin-right: 30px;
    margin-bottom: 0px;
    margin: 0;
    transition: background-color 0.2s;
    display: inline-flex;

    p {
      margin: 0;
      padding: 0;
      display: inline-flex;
      color: white;
      line-height: 22px;
    }

    img {
      display: inline-flex;
      transform: scale(0.8);
      margin-right: 10px;
    }

    &:hover {
      background-color: rgb(49, 157, 229, 0);
    }

    @media only screen and (min-width: 959px) {
      margin-bottom: 10px;
      padding: 9px 25px;
    }
  }

  .alt {
    background-color: transparent;
    border: 1px solid white;
    display: inline-block;
    transform: none;
    height: 44px;
    margin-left: 10px;
    transform: translateY(-6px);
    padding: 9px 15px;

    @media only screen and (min-width: 959px) {
      transform: translateY(-5px);
      margin-left: 20px;
      margin-top: 0;
    }

    &:hover {
      background-color: white;
      color: black !important;
    }
  }
`;

const MovieCard = ({ movie }) => {
  const { title, description, filmImage, imgAlt, link } = movie;
  return (
    <DisplayInline>
      <MovieContent>
        <MovieImage src={`${filmImage}`} alt={imgAlt} />
        <MovieDescription>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={link}>
            <button>
              <img alt="play" src={play}></img>
              <p>Buy Now</p>
            </button>
          </a>
          <a href={link}>
            <button className="alt">Trailer</button>
          </a>
        </MovieDescription>
      </MovieContent>
    </DisplayInline>
  );
};

export default MovieCard;
