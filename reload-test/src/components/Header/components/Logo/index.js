import React from 'react';
import styled from 'styled-components';
import {reloadLogo} from '../../../../assets';

const StyledLogo = styled.img`    
    width: 105px;
    height: 14px;
    margin: 16px;
`;

const LogoContainer = styled.div`
width: 15%;
height: 80%;
`;

const Logo = () => (
    <LogoContainer id="logo">
        <StyledLogo src={reloadLogo} />
    </LogoContainer>
);

export default Logo;