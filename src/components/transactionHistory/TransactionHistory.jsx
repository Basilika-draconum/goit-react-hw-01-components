import React from 'react';
import PropTypes from 'prop-types';
import css from './transactionHistory.module.scss';
import TransactionItem from './TransactionItem';

function TransactionHistory({ items }) {
  return (
    <table className={css.transaction_history}>
      <thead className={css.types}>
        <tr>
          <th className={css.types_head}>Type</th>
          <th className={css.types_head}>Amount</th>
          <th className={css.types_head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
