import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: ${props => props.width || 25}%;
    height: ${props => props.height || 50}%;
    padding: ${props=> props.paddingVertical || 3}% ${props=> props.paddingHorizontal || 2}%;
    background: ${props => props.transparent ? 'transparent' : props.gradient 
        ? props.gradient : props.image 
        ? `url(${props.image})` : '#F7F8FB'};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: ${props => props.noBorder ? 0: 1}px solid #E0DBE880;
    border-radius: 5%;
    text-align: left;
    font-family: SF Pro Text;
    letter-spacing: -0.65px;
    color: #6E6F84;
    text-transform: capitalize;
`;
const Header = styled.div`
    width: 100%;
    height: ${props => props.height || 20}%;
    display: flex;
    flex-direction: ${props=> props.flexDirection || 'row'};
    justify-content: space-between;
    align-items: center;
    border-bottom: ${props => props.noBorder ? 0: 1}px solid #E0DBE880;
    padding-bottom: 16px;
`;

const Content = styled.div`
    width: 100%;
    height: ${props => props.height || 60}%;
    display: flex;
    flex-direction: ${props=> props.flexDirection || 'column'};
    justify-content: space-between;
    align-items: center;
    `;

const Footer = styled.div`
    width: 100%;
    height: ${props => props.height || 20}%;
    border-top: ${props => props.noBorder ? 0: 1}px solid #E0DBE880;`;

const Card = (props) => {
    const {header, 
        content, 
        footer, 
        paddingVertical, 
        paddingHorizontal, 
        width, 
        height, 
        headerHeight, 
        contentHeight, 
        footerHeight,
        dontShowHeader,
        dontShowFooter,
        noBorder,
        gradient,
        background,
        transparent,
    } = props;
    return (
        <Container id="card" 
            paddingVertical={paddingVertical} 
            paddingHorizontal={paddingHorizontal} 
            width={width} 
            height={height}
            gradient={gradient}
            image={background}
            transparent={transparent}
            noBorder={noBorder}>
            {!dontShowHeader && <Header id="header" height={headerHeight} noBorder={noBorder}>
                {header}
            </Header>}
            <Content id="content" height={contentHeight}>
                {content}
            </Content>
            {!dontShowFooter && <Footer id="footer" height={footerHeight} noBorder={noBorder}>
                {footer}
            </Footer>}
        </Container>
    );
};

export default Card;