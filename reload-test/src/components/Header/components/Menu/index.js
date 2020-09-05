import React from 'react';
import styled from 'styled-components';
import {MenuItem} from './components';
import {icons} from '../../../../assets'; 

const MenuContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Menu = () => {
    const {biomarkerMenuIcon,
        biomarkerMenuIconSelected,
        lifestyleMenuIcon,
        lifestyleMenuIconSelected,
        nutritionMenuIcon,
        nutritionMenuIconSelected,
        recomendationsMenuIcon,
        recomendationsMenuIconSelected} = icons;

    return <MenuContainer id="Menu">
        <MenuItem icon={biomarkerMenuIcon} iconHover={biomarkerMenuIconSelected} label={'Biomarkers'} iconWidth={16}/>
        <MenuItem icon={nutritionMenuIcon} iconHover={nutritionMenuIconSelected} label={'Nutrition'} iconWidth={16}/>
        <MenuItem icon={lifestyleMenuIcon} iconHover={lifestyleMenuIconSelected} label={'Lifestyle'} iconWidth={20}/>
        <MenuItem icon={recomendationsMenuIcon} iconHover={recomendationsMenuIconSelected} label={'Recommendations'} iconWidth={12}/>
    </MenuContainer>;
};

export default Menu;