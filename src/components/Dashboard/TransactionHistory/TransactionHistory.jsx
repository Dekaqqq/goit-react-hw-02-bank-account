import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={styles.history}>
            <thead>
                <tr className={styles.headlineRow}>
                    <th className={styles.headlineRowItem}>Transaction</th>
                    <th className={styles.headlineRowItem}>Amount</th>
                    <th className={styles.headlineRowItem}>Date</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(el => {
                    const { id, type, amount, date } = el;

                    return (
                        <tr className={styles.row} key={id}>
                            <td className={styles.rowItem}>{type}</td>
                            <td className={styles.rowItem}>{amount}$</td>
                            <td className={styles.rowItem}>{date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.defaultProps = {
    transactions: [],
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
