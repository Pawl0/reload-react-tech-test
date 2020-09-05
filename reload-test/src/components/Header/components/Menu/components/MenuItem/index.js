import React, {useState} from 'react';
import styled from 'styled-components';

const MenuItemContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    color: #6FB4FF;
    :hover {
        color: #15D4D8;
        cursor: pointer;
    }
`;

const Icon = styled.div`
    width: ${props => props.width || 5}px;
    height: 100%;
    background-image: url(${props=> props.icon});    
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 16px;
    margin-right: ${props => props.marginRight || 8}px;
    ${props => props.border && 'border-bottom: 1px #15D4D8 solid;'} 
    
`;

const Label = styled.p`
    font-size: 12px;
`;


const MenuItem = (props) => {
    const {icon, iconHover, iconWidth, label, marginRight} = props;
    const [hovered, setHovered] = useState(false);

    
    const OnMouseOver = () => {
        setHovered(true);
    };

    const OnMouseLeave = () => {
        setHovered(false);
    };

    return <MenuItemContainer id="MenuItem" onMouseOver={OnMouseOver} onMouseLeave={OnMouseLeave}>
        {!hovered && <Icon id="icon" icon={icon} width={iconWidth} marginRight={marginRight} />}
        {hovered && <Icon id="iconHovered" icon={iconHover} border width={iconWidth} marginRight={marginRight} />}
        <Label id="label">
            {label}    
        </Label>
    </MenuItemContainer>;
};

export default MenuItem;