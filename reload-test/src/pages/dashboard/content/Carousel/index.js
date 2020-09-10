import React from 'react';
import styled from 'styled-components';
import {clock, next} from '../../../../assets/icons';

const RunnerContainer = styled.div`
    width: ${props => props.width || 20}%;
    height: ${props => props.height || 50}%;
    background: #231AA166;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const RunnerAvatar = styled.div`
    width: 40%;
    height: 65%;
    border-radius: 50%;
    background-image: url(${props => props.img});
    background-size: 100% 100%;
    margin-right: 16px;
`;

const RunnerTextContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 32px;
`;

const RunnerTitle = styled.label`
    font-size: 12px;
    color: #6FB4FF;
`;

const RunnerTime = styled.label`
    font-size: 11px;
    color: #FFFFFF;
`;

const Img = styled.img`
    width: 9px;
    height: 9px;
    transform: scaleX(${props => props.mirror ? -1 : 1});
    ${props=> props.hover && ':hover { cursor: pointer }'};
`;


const Runner = ({runner}) => {

    return <RunnerContainer id="runner" width={15} height={30}>
        <RunnerTextContainer id="runnerTextContainer">
            <RunnerTitle id="runnerTitle">{runner.title}</RunnerTitle>
            <RunnerTime id="runnerTime"><Img src={clock} /> {runner.time}</RunnerTime>
        </RunnerTextContainer>
        <RunnerAvatar id="runnerAvatar" img={runner.img} />
    </RunnerContainer>;
};


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
        <Img src={next} mirror hover />
        {runners.map((runner, index) => <Runner key={index} runner={runner}/>)}
        <Img src={next} hover/>
    </CarouselContainer>;
};

export default Carousel;