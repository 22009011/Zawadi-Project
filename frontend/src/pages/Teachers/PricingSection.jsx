import React from 'react';
import styled from 'styled-components';

const PricingSection = () => {
  return (
    <SectionContainer>
      <Header>
        <Title>Pricing</Title>
        <Subtitle>Pricing for everyone. Choose your plan now! * Licenses billed per classroom termly</Subtitle>
      </Header>
      <PlansContainer>
        <PlanCard className="free">
          <PlanTitle>Jamii <span>(Community)</span></PlanTitle>
          <PlanPrice>Free</PlanPrice>
          <PlanFeatures>
            <li>Online Lesson Planning</li>
            <li>Formative Assessments</li>
            <li>Basic Formative Reports</li>
            <li>Data Access limited to 3 months</li>
          </PlanFeatures>
        </PlanCard>
        <PlanCard className="starter">
          <PlanTitle>Chanzo <span>(Starter)</span></PlanTitle>
          <PlanPrice>3,000</PlanPrice>
          <PlanFeatures>
            <li>All Jamii Plan Features</li>
            <li>Classroom Attendance</li>
            <li>Summative Assessments</li>
            <li>Automated Summative Reports</li>
            <li>Access to Basic Standard Reports</li>
            <li>Push to Teacher’s Gradebook</li>
          </PlanFeatures>
        </PlanCard>
        <PlanCard className="silver">
          <PlanTitle>Hakika <span>(Silver)</span></PlanTitle>
          <PlanPrice>6,000</PlanPrice>
          <PlanFeatures>
            <li>All Chanzo Plan Features</li>
            <li>Curriculum Scheme of Work</li>
            <li>Up to 7 Branded Reports</li>
            <li>Teacher Leaderboards</li>
            <li>Enhanced Reporting and Analytics</li>
            <li>Extensive Training and Support</li>
            <li>Android/IOS Guardian App</li>
            <li>Up to 5 Admin Users</li>
            <li>Support via WhatsApp</li>
          </PlanFeatures>
        </PlanCard>
        <PlanCard className="gold">
          <PlanTitle>Imara <span>(Gold)</span></PlanTitle>
          <PlanPrice>8,000</PlanPrice>
          <PlanFeatures>
            <li>All Hakika Plan Features</li>
            <li>Custom Lesson Plans</li>
            <li>Access to Kurasa Global Insights</li>
            <li>Priority to Kurasa Events</li>
            <li>6 Branded Reports</li>
            <li>Strategic Support</li>
            <li>Integration with Education Apps</li>
            <li>Dedicated Account Manager</li>
            <li>Best Access to New Features</li>
          </PlanFeatures>
        </PlanCard>
      </PlansContainer>
      <Footer>
        <SupportContact>0208 000 208</SupportContact>
        <Website>kurasa.co.ke</Website>
      </Footer>
    </SectionContainer>
  );
};

export default PricingSection;
