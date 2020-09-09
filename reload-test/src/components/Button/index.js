import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
width: ${props => props.lifestyle ? 100 : window.innerWidth >= 1280 ? props.small ? 20 : 
    props.report ? 80 
    : 50 
    : props.small ? 30
    : props.report ? 80 
    : 70}%;
height: ${props => props.report ? 65 : 60}%;
background: ${props => props.transparent ? 'transparent': props.background ||  
'linear-gradient(79deg, #15D4D8 0%, #15D8BD 100%)'};
border: 1px solid #E0DBE880;
border-radius: 8px;
display: flex;
justify-content: ${props => props.lifestyle ? 'space-between' : 'center'};
align-items: center;
padding: 8px 16px;
:hover {
    cursor: pointer;
}
`;

const Label = styled.p`
    letter-spacing: 0.84px;
    color: ${props => props.transparent ? '#B4B4B4':  props.color || '#FFFFFF'};
    font-size: ${props => props.fontFontSize || props.report ? window.innerWidth >= 1280 ? 11 : 9
         : 12}px;
    text-align: center;
`;

const Status = styled.span`
    letter-spacing: 0.84px;
    color: ${props => props.transparent ? '#B4B4B4':  props.color || '#FFFFFF'};
    font-size: ${props => props.fontFontSize || props.report ? window.innerWidth >= 1280 ? 11 : 9
        : 12}px;
    text-align: right;
    margin-left: 8px;
`;
const StatusIcon = styled.span`
    font-size: ${21}px;
    text-align: right;
    margin-left: 8px;
`;

const AlignRight = styled.div`
        display: flex;
        justify-content: flex-end;       
        align-items: center; 
`;

const Button = ({label, small, transparent, fontFontSize, report, background, color, lifestyle, status, statusPercent}) =>(
    <StyledButton id="button" small={small} 
        transparent={transparent} 
        report={report}
        background={background}
        lifestyle={lifestyle}>
            <Label id="label" 
                transparent={transparent} 
                fontFontSize={fontFontSize} 
                report={report}
                color={color}
                >
                {label}
            </Label>
            {lifestyle && <AlignRight>                
                <StatusIcon>             
                    {status}
                </StatusIcon>
                <Status>             
                    {statusPercent}
                </Status>
            </AlignRight>}
        </StyledButton>
);

export default Button;