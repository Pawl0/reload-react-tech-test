import React from 'react';
import styled from 'styled-components';
import {Button, ScoreWheel} from '../../../../components';

const Header = styled.div`
    width: ${props => props.width || 100}%;
    height: ${props => props.height || 100}%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const SubHeader = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: ${props => props.justify || 'space-between'};
    align-items: center;
`;

const Title = styled.h1`
    font-size: ${props=> props.fontSize || 18}px;
    color: ${props => props.color};
    margin: ${props => props.margin || 12}px 0;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
`;


const AirQualityHeader = () => {

    return <Header id="AirQualityHeader">
        <Title id="title">Air Quality</Title>
        <SubHeader id="headerSubheader">
            <Button  label={"Very Good"} small/>
            <Button  label={"480 CO2"} small transparent/>
            <Button  label={"55%"} small transparent/>
        </SubHeader>
    </Header>
};

const AirQualityContent = (props) => {

    return <Content id="AirQualityContent">
        <ScoreWheel id="UV Rays Wheel" 
            offset={190} 
            radius={"40%"}  
            outerStrokeWidth={10} 
            innerStrokeWidth={20}
            dialTop={-10}
            dialLeft={-48}/>
        <Header id="UV Rays Container" width={70} height={80}>
            <Title id="UV Title" fontSize={32} margin={8}>UV Rays</Title>
            <SubHeader id="contentSubheader" justify={'flex-start'}>
                <Button  
                    label={"3 - 5 LOW"} 
                    small 
                    transparent
                    width={30}
                    height={40} 
                    marginRight={8}/>
                <Button  
                    label={"6 - 7 MEDIUM"} 
                    small 
                    transparent
                    width={30}
                    height={40} />
            </SubHeader>
        </Header>
    </Content>;
};

const AirQuality = {header: <AirQualityHeader />, content: <AirQualityContent />};

export default AirQuality;