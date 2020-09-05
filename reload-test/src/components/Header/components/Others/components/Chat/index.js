import React from 'react';
import styled from 'styled-components';
import {icons} from '../../../../../../assets'; 

const ChatContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const ChatCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChatImg = styled.img`
    width: 16px;
    height: 32px;`;

const Chat = () => {
    const {chatIcon} = icons;

    return <ChatContainer id="chat">
        <ChatCircle id="circle">
            <ChatImg id="chatImg" src={chatIcon} />
        </ChatCircle>
    </ChatContainer>
};

export default Chat;