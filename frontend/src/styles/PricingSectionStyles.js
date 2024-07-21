import styled from 'styled-components';

export const SectionContainer = styled.section`
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1em;
  color: #555;
`;

export const PlansContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PlanCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 250px;
  padding: 20px;
  text-align: left;
  
  &.free {
    border: 2px solid #ccc;
  }

  &.starter {
    border: 2px solid #d9534f;
  }

  &.silver {
    border: 2px solid #f0ad4e;
  }

  &.gold {
    border: 2px solid #5bc0de;
  }
`;

export const PlanTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  span {
    font-size: 0.75em;
    color: #777;
  }
`;

export const PlanPrice = styled.div`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
`;

export const PlanFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    margin-bottom: 10px;
    color: #666;
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;
`;

export const SupportContact = styled.div`
  font-size: 1.2em;
  margin-bottom: 5px;
`;

export const Website = styled.div`
  font-size: 1.2em;
  color: #007bff;
`;
