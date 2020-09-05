import React from 'react';
import styled from 'styled-components';
import {Logo, Menu, Others} from './components';

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    z-index: 1;
`;

const Header = () => {
    return <HeaderContainer id="header">
        <Logo/>
        <Menu/>
        <Others/>
    </HeaderContainer>;
};

export default Header;
