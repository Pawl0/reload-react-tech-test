import React from 'react';
import styled from 'styled-components';
import { Card, ScoreWheel } from '../../../../components';

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