import React from 'react';
import styled from 'styled-components';
import {Button, ProgressBar, Emoji} from '../../../../components';

const Header = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 18px;
    color: ${props => props.color};
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Footer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`;

const LifestyleContent = (props) => {

    const barColor = 'transparent linear-gradient(348deg, #36B1E7 0%, #6ADBFF 100%) 0% 0% no-repeat padding-box;';
    const bgColor = '#808BE4';

    return <Content id="LifestyleContent">
        <ProgressBar barColor={barColor} bgColor={bgColor} width={50} title={'physical activity'}/>
        <ProgressBar barColor={barColor} bgColor={bgColor} width={0} title={'sleep'}/>
        <ProgressBar barColor={barColor} bgColor={bgColor} width={100} title={'productivity'}/>
    </Content>
};

const LifestyleHeader = (props) => {

    return <Header id="LifestyleHeader">
        <Title id="title" color={"#FFFFFF"}>Lifestyle</Title>
        <Button id="button" label={"See More"} small/>
    </Header>
};

const LifestyleFooter = (props) => {

    return <Footer id="LifestyleFooter">
        <Button id="button" label={"Mood - Mind Balance"}
        status={<Emoji symbol="😌" label="relieved-face" />}
        statusPercent={'75%'}
        lifestyle
        report background={'rgba(0,0,0,0.05)'} color={'#FFFFFF'}/>
    </Footer>
};

const Lifestyle = {
    header: <LifestyleHeader />, 
    content: <LifestyleContent />, 
    footer: <LifestyleFooter />
};

export default Lifestyle;