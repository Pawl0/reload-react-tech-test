import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../../components';

const Header = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const SubHeader = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 18px;
`;


const AirQualityHeader = (props) => {

    return <Header id="AirQualityHeader">
        <Title id="title">Air Quality</Title>
        <SubHeader id="">
            <Button  label={"Very Good"} small/>
            <Button  label={"480 CO2"} small transparent/>
            <Button  label={"55%"} small transparent/>
        </SubHeader>
    </Header>
};

const AirQuality = {header: <AirQualityHeader />};

export default AirQuality;