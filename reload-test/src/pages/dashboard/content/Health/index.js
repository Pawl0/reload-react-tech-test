import React, { useState } from 'react';
import styled from 'styled-components';
import {Button} from '../../../../components';

const Header = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Footer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 11px;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
`;

const PillContainer = styled.div`
    min-width: 75px;
    max-width: 150px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    background: transparent;
    border: 1px solid #BABABA;
    border-radius: 30%;
    margin: 8px 8px;
`;

const Label = styled.label`
    color: ${props => props.color || '#B4B4B4'};
    font-size: ${props => props.fontFontSize || 12}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    margin-left: 8px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => props.checked ? 'gray' : 'lightgray'};
    border-radius: 50%;
    transition: all 150ms;
    ${HiddenCheckbox}:focus + & {
      box-shadow: 0 0 0 3px pink;
    }
    ${Icon} {
        visibility: ${props => props.checked ? 'visible' : 'hidden'}
    }
    :hover {
        cursor: pointer;
    }
`;

const CheckboxContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
`;

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    return <CheckboxContainer id="Checkbox">
      <HiddenCheckbox id="HiddenCheckbox"/>
        <StyledCheckbox id="StyledCheckbox" checked={checked} onClick={() => setChecked(!checked)}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
};

const Pill = ({label, background, color, fontFontSize}) => (
    <PillContainer id="pill" background={background}>
        <Label color={color} fontFontSize={fontFontSize}>{label}</Label>
        <Checkbox/>
    </PillContainer>
);

const HealthHeader = () => (
    <Header id="HealthHeader">
        <Title id="title">Health Goals and Symptoms</Title>
    </Header>
);

const HealthContent = () => (
    <Content id="HealthContent">
        <Pill label={'Skincare'}/>
        <Pill label={'Acne'}/>
        <Pill label={'Greying Hair'}/>
    </Content>
);

const HealthFooter = () => (
    <Footer id="HealthFooter">
        <Button id="button" label={"Report new symptom"}
        report background={'rgba(0,0,0,0.05)'} color={'#8F8F8F'}/>
    </Footer>
);

const Health = {header: <HealthHeader />, content: <HealthContent/>, footer: <HealthFooter />};

export default Health;