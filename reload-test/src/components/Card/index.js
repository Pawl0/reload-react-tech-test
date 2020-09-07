import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: ${props => props.width || 25}%;
    height: ${props => props.height || 100}%;
    padding: ${props=> props.paddingVertical || 2}% ${props=> props.paddingHorizontal || 2}%;
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
    font-size: ${props => props.headerFontSize || 16}px;
    text-align: ${props => props.headerTextAlign};
`;

const Content = styled.div`
    width: 100%;
    height: ${props => props.height || 60}%;
    display: flex;
    flex-direction: ${props=> props.flexDirection || 'column'};
    justify-content: space-between;
    align-items: center;
    font-size: ${props => props.contentFontSize || 16}px;
    ${props => props.upperBorder && 'border-top: 1px solid #E0DBE880;'}
    `;

const Footer = styled.div`
    width: 100%;
    height: ${props => props.height || 20}%;
    border-top: ${props => props.noBorder ? 0: 1}px solid #E0DBE880;
    font-size: ${props => props.footerFontSize || 16}px;
    `;

const Card = (props) => {
    const {header, 
        content, 
        footer, 
        paddingVertical, 
        paddingHorizontal, 
        width, 
        height, 
        headerHeight,
        headerFontSize, 
        headerTextAlign,
        contentHeight, 
        contentFontSize,
        footerHeight,
        footerFontSize,
        dontShowHeader,
        dontShowFooter,
        noBorder,
        upperBorder,
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
            {!dontShowHeader && <Header id="header" 
                height={headerHeight} 
                headerFontSize={headerFontSize} 
                headerTextAlign={headerTextAlign}
                noBorder={noBorder}>
                {header}
            </Header>}
            <Content id="content" height={contentHeight} 
            contentFontSize={contentFontSize}
            upperBorder={upperBorder}
            >
                {content}
            </Content>
            {!dontShowFooter && <Footer id="footer" height={footerHeight} footerFontSize={footerFontSize} noBorder={noBorder}>
                {footer}
            </Footer>}
        </Container>
    );
};

export default Card;