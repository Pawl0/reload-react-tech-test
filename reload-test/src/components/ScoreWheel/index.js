import React from 'react';
import styled from 'styled-components';

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
stroke-width: ${props => props.strokeWidth || 25}%;
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
    const {score, radius, offset, fontColor, fontSize, innerStrokeWidth, outerStrokeWidth, dialTop, dialLeft} = props;

    return <StyledScoreWheel id="ScoreWheel" diameter={100} borderSize={10}>
        <StyledSVG id="svg">
            <StyledSVGCircleContainer r={radius || "35%"}
              cx="50%"
              cy="50%"
              strokeWidth={innerStrokeWidth}
              offset={offset} />
            <StyledSVGCircle id="svgCircle" r={radius || "35%"}
              cx="50%"
              cy="50%"
              strokeWidth={outerStrokeWidth}
              offset={offset} />
        </StyledSVG>
        <ScoreWheelPercent color={fontColor} fontSize={fontSize}>{score}%</ScoreWheelPercent>
        <ScoreWheelPercent color={fontColor} fontSize={fontSize}>
            <Dial id="dial" top={dialTop || 1} left={dialLeft || -41}/>
        </ScoreWheelPercent>
    </StyledScoreWheel>;
};

export default ScoreWheel;