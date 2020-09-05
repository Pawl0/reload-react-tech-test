import React from 'react';
import styled from 'styled-components';

const AssessmentButtomContainer = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
`;

const StyledAssessmentButton = styled.div`
    width: ${window.innerWidth >= 1280 ? 50 : 70}%;
    height: 60%;
    background: linear-gradient(79deg, #15D4D8 0%, #15D8BD 100%);
    border: 1px solid #E0DBE880;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`;

const Label = styled.p`
    letter-spacing: 0.84px;
    color: #FFFFFF;
    font-size: 12px;
    text-align: center;
`;


const AssessmentButton = ({label}) => {

    return <AssessmentButtomContainer id="assessmentButtonContainer">
        <StyledAssessmentButton id="assessmentButton">
            <Label id="label" >
                {label}
            </Label>
        </StyledAssessmentButton>
    </AssessmentButtomContainer>
};

export default AssessmentButton;