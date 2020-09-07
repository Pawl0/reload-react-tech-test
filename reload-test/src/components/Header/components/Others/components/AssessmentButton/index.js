import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../../../../components';

const AssessmentButtomContainer = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
`;


const AssessmentButton = ({label}) => {

    return <AssessmentButtomContainer id="assessmentButtonContainer">
        <Button label={label} /> 
    </AssessmentButtomContainer>
};

export default AssessmentButton;