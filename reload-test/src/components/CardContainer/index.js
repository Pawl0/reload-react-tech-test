import React from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
    width: 100%;
    height: ${props => props.height || 100}%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const CardContainer = (props) => (
<StyledCardContainer id="cardContainer" {...props}>
    {props.children}
</StyledCardContainer>);

export default CardContainer;