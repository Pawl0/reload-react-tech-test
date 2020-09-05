import React from 'react';
import styled from 'styled-components';
import {Chat,AssessmentButton,UserAvatar} from './components';

const OthersContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const Others = () => <OthersContainer id="others" >
    <Chat />
    <AssessmentButton label={"Assessment"}/>
    <UserAvatar />
</OthersContainer>;

export default Others;