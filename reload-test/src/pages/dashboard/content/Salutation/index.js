import React from 'react';
import styled from 'styled-components';

const SalutationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #FFFFFF;
`;

const Title = styled.h1`
    font-size: 32px;
    text-transform: capitalize;
    letter-spacing: -1.02px;
    text-align: left;
    font-weight: normal;
`;

const SubTitle = styled.h2`
    font-size: 14px;
    letter-spacing: -0.2px;
    text-transform: lowercase;
    text-align: left;
    font-weight: normal;
`;

const Salutation = (props) => {
    const {title, subtitle} = props;

    return (
        <SalutationContainer id="salutation">
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </SalutationContainer>
    )
};

export default Salutation;
