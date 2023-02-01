import React from 'react';
import PropTypes from 'prop-types';
import css from './transactionItem.module.scss';

function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr className={css.row}>
      <td className={css.row_type}>{type}</td>
      <td className={css.row_amount}>{amount}</td>
      <td className={css.row_currency}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
