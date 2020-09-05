import React from 'react';
import styled from 'styled-components';
import {Runner} from './components;'

const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const Carousel = (props) => {
    const {runners} = props;

    return <CarouselContainer id="carousel">
        {runners.map((runner, index) => <Runner key={index} runner={runner}/>)}
    </CarouselContainer>;
};

export default Carousel;