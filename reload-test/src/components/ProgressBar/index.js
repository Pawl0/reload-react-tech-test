import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
    width: 100%;
    height: ${props => props.height || 20}%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;
const OuterProgressBar = styled.div`
    background: ${props=> props.bgColor || 'transparent linear-gradient(180deg, #EFEFEF5E 0%, #C8C8C866 100%) 0% 0% no-repeat padding-box'};
    width: 90%;
    height: ${props => props.height || 100}%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 0;
    position: relative;
`;
const InnerProgressBar = styled.div`
    background: ${props=> props.width === 0 ?  props.bgColor : props.barColor || '#36B1E7'};
    width: ${props => props.width >= 0 ? props.width : 50}%;
    height: ${props => props.height || 100}%;
    z-index: 1;
    position: relative;
    color: #FFFFFF;
    text-align: left;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Label = styled.label`
    color: #BCBCC4;
    text-align: left;
    letter-spacing: -0.55px;
    font-size: 15px;
`;

const ProgressBar = (props) => {
    const {width, height, title, barColor, bgColor} = props;
    return <ProgressBarContainer id="ProgressBar" height={height}>
        <Label id="label">{width}%</Label>
        <OuterProgressBar id="outerProgressBar" bgColor={bgColor}>
            <InnerProgressBar id="innerProgressBar" barColor={barColor} bgColor={bgColor} width={width} >{title}</InnerProgressBar>
        </OuterProgressBar>
    </ProgressBarContainer>
};

export default ProgressBar;