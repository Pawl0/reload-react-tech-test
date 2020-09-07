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
`;


const BiomarkersHeader = (props) => {

    return <Header id="BiomarkersHeader">
        <Title id="title">Biomarkers Priorities</Title>
        <Button id="button" label={"See More"} small/>
    </Header>
};

const Biomarkers = {header: <BiomarkersHeader />};

export default Biomarkers;