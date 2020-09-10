import React from 'react';
import styled from 'styled-components';
import {defaultBg} from '../../assets';


const FullBackground = styled.div`
    width: 100%;
    height: 130%;
    position: absolute;
`;

const HalfBGImg = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${defaultBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;


const HalfBGColor = styled.div`
    width: 100%;
    height: 50%;
    background-color: #ECEEF4;
`;

const Background = (props) => (<FullBackground id="fullBG">
    <HalfBGImg id="halfBGImg"/>
    <HalfBGColor id="halfBGColor"/>
</FullBackground>);

export default Background;