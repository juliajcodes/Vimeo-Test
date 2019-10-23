import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieCard from "./MovieCard";
import data from "../CarouselData.js";

const CarouselContainer = styled.div`
  width: 100%;
  min-height: 1000px;
  padding: 0;
  background-color: black;
  color: white;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
`;

const CarouselBackWrapper = styled.div`
  top: 0px;
  height: 1000px;
  z-index: -1;
  width: 100vw;
  position: absolute;
`;

const CarouselBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: blur(20px) brightness(0.5);
  z-index: -1;
  transition: transform 330ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  @media only screen and (min-width: 959px) {
    background-size: 100%;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 50px;
  transition: color 0.2s;
  outline: none;

  &:hover {
    color: #71a9ce;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
  min-height: 1000px;
  align-items: center;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const MapWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: data.movies,
      movie: data.movies[0]
    };
  }
  nextMovie = () => {
    // when next button is pressed
    const newIndex = this.state.movie.index + 1;
    this.setState({
      movie: data.movies[newIndex]
    });
  };

  prevMovie = () => {
    // when previous button is pressed
    const newIndex = this.state.movie.index - 1;
    this.setState({
      movie: data.movies[newIndex]
    });
  };

  render() {
    const { movies, movie } = this.state;
    return (
      <CarouselContainer>
        <SliderWrapper
          className="cards-slider-wrapper"
          style={{
            transform: `translateX(-${movie.index * (100 / movies.length)}%)`
          }}
        >
          {movies.map(movie => (
            <MapWrap key={"wrapper" + movie.index}>
              <CarouselBackWrapper>
                <CarouselBackground
                  style={{ backgroundImage: `url(${movie.filmImage})` }}
                />
              </CarouselBackWrapper>
              <Button
                onClick={() => this.prevMovie()}
                disabled={movie.index === 0}
                key={"button-left" + movie.index}
              >
                &#8249;
              </Button>
              <MovieCard
                className={`active-slide-${movie.index}`}
                key={movie._id}
                movie={movie}
              />
              <Button
                onClick={() => this.nextMovie()}
                disabled={movie.index === data.movies.length - 1}
                key={"button-right" + movie.index}
              >
                &#8250;
              </Button>
            </MapWrap>
          ))}
        </SliderWrapper>
      </CarouselContainer>
    );
  }
}

export default Carousel;
