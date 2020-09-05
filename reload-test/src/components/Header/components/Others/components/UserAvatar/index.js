import React from 'react';
import styled from 'styled-components';
import {avatars} from '../../../../../../assets'; 

const UserAvatarContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 16px;
    :hover {
        cursor: pointer;
    }
`;

const UserAvatarImg = styled.img`
width: 40px;
height: 32px;
`;

const UserAvatar = () => {
    const {userAvatar} = avatars;

    return <UserAvatarContainer id='userAvatarContainer'>
            <UserAvatarImg id='userImg' src={userAvatar}/>
    </UserAvatarContainer>

};

export default UserAvatar;