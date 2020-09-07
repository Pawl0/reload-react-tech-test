import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const InnerDiv = styled.div`
    width: ${props => props.width || 80}%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 15%;
`;

const Foreground = (props) => (<OuterDiv id="foreground">
    <InnerDiv id="innerForeground" {...props}>
        {props.children}
    </InnerDiv>
</OuterDiv>);

export default Foreground;