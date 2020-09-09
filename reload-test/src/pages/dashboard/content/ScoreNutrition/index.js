import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components';

const ScoreContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const ScoreWheelContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledScoreWheel = styled.div`
    width: ${props=> props.diameter || 50}px;
    height: ${props=> props.diameter || 50}px;;
    background: transparent;
    text-align: center;
    border-radius: 50%;
    color: ${props => props.color || '#FFFFFF'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSVG = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledSVGCircle = styled.circle`
  stroke-dasharray:  calc(${(props) => props.r}*2*3.14);
  stroke-dashoffset: ${props=>props.offset || 0}px;
  stroke-width: 10%;
  stroke: #36E7D1;
  fill: none;
  transform: rotate(-270deg);
  transform-origin: center center;
  position: absolute;
  z-index: 10;
  }
`;

const StyledSVGCircleContainer = styled.circle`
  stroke-dasharray:  calc(${(props) => props.r}*2*3.14);
  stroke-dashoffset: 0px;
  stroke-width: 25%;
  stroke: #2929292E;
  fill: none;
  transform: rotate(-270deg);
  transform-origin: center center;
  position: absolute;
  z-index: 10;
  }
`;

const ScoreWheelPercent = styled.div`
  position: absolute;
  color: ${props => props.color || '#FFFFFF'};
  font-size: ${props => props.fontSize || 16}px;
`;

const Dial = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    position: absolute;
    z-index: 99;
    top: ${props => props.top || 0}px;
    left: ${props => props.left || 0}px;
`;

const ScoreWheel = (props) => {
    const {score, radius, offset, fontColor, fontSize} = props;

    return <StyledScoreWheel id="ScoreWheel" diameter={100} borderSize={10}>
        <StyledSVG id="svg">
            <StyledSVGCircleContainer r={radius || "35%"}
              cx="50%"
              cy="50%"
              offset={offset} />
            <StyledSVGCircle id="svgCircle" r={radius || "35%"}
              cx="50%"
              cy="50%"
              offset={offset} />
        </StyledSVG>
        <ScoreWheelPercent color={fontColor} fontSize={fontSize}>{score}%</ScoreWheelPercent>
        <ScoreWheelPercent color={fontColor} fontSize={fontSize}>
            <Dial id="dial" top={1} left={-41}/>
        </ScoreWheelPercent>
    </StyledScoreWheel>;
};

const ScoreWheelLabel = styled.div`
    color: #FFFFFF;
    font-size: 32px;
`;

const LastMealHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const LastMealTitle = styled.h1`
    font-size: 11px;
    color: #BCBCC4;
    margin: 0;
    text-transform: capitalize;
`;

const LastMealSubTitle = styled.h2`
    font-size: 18px;
    color: #6E6F84;
    margin: 0;
    text-transform: capitalize;
`;

const LastMealHeader =(props) => {
    const {lastMeal} = props;
    
    return <LastMealHeaderContainer id="lastMeal">
        <LastMealTitle id="lastMealTitle">Last Meal</LastMealTitle>
        <LastMealSubTitle id="lastMealSubTitle">{lastMeal}</LastMealSubTitle>
    </LastMealHeaderContainer>
};

const LastMealContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    `;

const LastMealContent = (props) => {
    const {lastMealScore} = props;

    return <LastMealContentContainer id="lastMealContent">
        <ScoreWheel id="lastMealWheel" score={lastMealScore} {...props} />
    </LastMealContentContainer>;
};

const ScoreNutrition = ({score, label, lastMeal, lastMealScore}) => {
    return <ScoreContainer id="ScoreNutrition">
        <ScoreWheelContainer id="ScoreWheelContent">
            <ScoreWheel id="ScoreWheel" score={score} offset={175}/>
            <ScoreWheelLabel id="ScoreWheelLabel">{label}</ScoreWheelLabel>
        </ScoreWheelContainer>
        <Card 
            id="lastMealCard"
            width={20}
            height={60}
            header={<LastMealHeader id="lastMealHeader" lastMeal={lastMeal} />}
            content={<LastMealContent id="lastMealContent" lastMealScore={lastMealScore}  
                fontColor={'gray'} offset={175} />}
            noBorder 
            dontShowFooter
        />
    </ScoreContainer>
};

export default ScoreNutrition;