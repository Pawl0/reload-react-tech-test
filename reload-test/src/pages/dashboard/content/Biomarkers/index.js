import React from 'react';
import styled from 'styled-components';
import {Button, ProgressBar} from '../../../../components';

const Header = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 18px;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const BiomarkersHeader = (props) => {

    return <Header id="BiomarkersHeader">
        <Title id="title">Biomarkers Priorities</Title>
        <Button id="button" label={"See More"} small/>
    </Header>
};

const BiomarkersContent = (props) => {

    return <Content id="BiomarkersContent">
        <ProgressBar width={50} title={'digestion'}/>
        <ProgressBar width={100} title={'energy'}/>
        <ProgressBar width={100} title={'detox'}/>
        <ProgressBar width={30} title={'messaging'}/>
        <ProgressBar width={50} title={'antioxydant'}/>
    </Content>
};

const Biomarkers = {header: <BiomarkersHeader />, content: <BiomarkersContent />};

export default Biomarkers;