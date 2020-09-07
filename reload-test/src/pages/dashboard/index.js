import React, {Fragment} from 'react';
import {Background, Foreground, CardContainer, Card, Header} from '../../components';
import {cardBGs} from '../../assets';
import {Salutation, Biomarkers, AirQuality, Lifestyle, Health} from './content';

const Dashboard =() => {
  const {cardBgPeople, cardBgPurple} = cardBGs;

  return (
  <Fragment>
    <Header />
    <Background />
    <Foreground width={90}>
      <CardContainer height={'10px'}>
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

      <CardContainer height={'250px'}>
        <Card width={30}
          header={AirQuality.header}
          headerHeight={50}
          noBorder
          upperBorder
          dontShowFooter
        />
        <Card 
          header={Biomarkers.header}
          width={40}
          noBorder/>
        <Card 
          header={Health.header}
          headerFontSize={10}
          headerTextAlign={'center'}
          content={Health.content}
          contentHeight={50}
          footer={Health.footer}
          footerHeight={30}
          width={16}/>
      </CardContainer>

      <CardContainer height={'250px'}>
        <Card 
          header={Lifestyle.header}
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