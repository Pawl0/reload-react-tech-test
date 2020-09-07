import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../../components';

const Header = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 16px;
    color: ${props => props.color};
`;


const LifestyleHeader = (props) => {

    return <Header id="LifestyleHeader">
        <Title id="title" color={"#FFFFFF"}>Lifestyle</Title>
        <Button id="button" label={"See More"} small/>
    </Header>
};

const Lifestyle = {header: <LifestyleHeader />};

export default Lifestyle;