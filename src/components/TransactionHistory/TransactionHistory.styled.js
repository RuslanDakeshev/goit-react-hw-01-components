import styled from 'styled-components';

export const Transactions = styled.table`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  width: 350px;
  background-color: #ebf5fc;
  
  border-radius: 10px;
`;

export const TableHeader = styled.thead`
  margin-bottom: 20px;
  width: 100%;
  display: block;
  box-shadow: #ffffff;
  border-radius: 10px;
`;

export const HeaderRow = styled.tr`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.th`
  
  font-size: 24px;
  color: #6a9bd8;
  text-align: left;
`;

export const TableBody = styled.tbody`
  width: 100%;
  display: block;
`;

export const BodyRow = styled.tr`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 10px;
`;

export const BodyValue = styled.td`
  padding: 10px;
  flex-basis: 33.333%;
  font-weight: 500;
  color: #858585;
`;