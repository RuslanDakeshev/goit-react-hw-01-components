import styled from 'styled-components';


export const Section = styled.section`
  margin: 30px auto 0;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  padding: 24px;
  background-color: #ffffff;
  font-size: 19px;
  color: #76848f;
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 5);
  color: black
`;

export const Label = styled.span`
  font-size: 13px;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;