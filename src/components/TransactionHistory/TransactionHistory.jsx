import PropTypes from 'prop-types';
import { TableBody, Transactions, TableHeader, HeaderRow, HeaderTitle, BodyRow, BodyValue } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <TableHeader>
        <HeaderRow>
          <HeaderTitle>Type</HeaderTitle>
          <HeaderTitle>Amount</HeaderTitle>
          <HeaderTitle>Currency</HeaderTitle>
        </HeaderRow>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <BodyRow key={id}>
              <BodyValue>{type}</BodyValue>
              <BodyValue>{amount}</BodyValue>
              <BodyValue>{currency}</BodyValue>
            </BodyRow>
          );
        })}
      </TableBody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
