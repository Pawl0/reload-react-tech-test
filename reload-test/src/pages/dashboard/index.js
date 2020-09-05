import React, {Fragment} from 'react';
import {Background, Foreground, CardContainer, Card, Header} from '../../components';
import {cardBGs} from '../../assets';
import {Salutation} from './content';

const Dashboard =() => {
  const {cardBgPeople, cardBgPurple} = cardBGs;

  return (
  <Fragment>
    <Header />
    <Background />
    <Foreground>
      <CardContainer height={30}>
      <Card 
          content={<Salutation title={"Hey Astel!"} subtitle={"See your STORIES RELEVANT INTERACTIONS"} />}
          width={20}
          dontShowHeader
          dontShowFooter
          noBorder
          transparent
        />
        <Card width={70}
          dontShowHeader
          dontShowFooter
          noBorder
          transparent/>
      </CardContainer>
      <CardContainer height={30}>
        <Card width={25}
          header={'Air Quality'}
        />
        <Card 
          header={'Biomarkers Priorities'}
          width={40}/>
        <Card 
          header={'Health Goals And Symptoms'}
          width={15}/>
      </CardContainer>
      <CardContainer height={30}>
        <Card 
          header={'Lifestyle'}
          width={35} height={100} background={cardBgPurple} noBorder/>
        <Card 
          header={'Score Nutrition'}
          width={55} height={100} background={cardBgPeople} noBorder/>
      </CardContainer>
    </Foreground>
  </Fragment>     
  );
};

  export default Dashboard;