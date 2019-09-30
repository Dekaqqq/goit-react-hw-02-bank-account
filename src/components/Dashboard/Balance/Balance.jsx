import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';
import {
    calculateTotalDeposit,
    calculateTotalWithdraw,
} from './calculateTotalAmount';

const Balance = ({ balance, transactions }) => (
    <section className={styles.balance}>
        <span className={styles.description}>
            <span role="img" aria-label="img" className={styles.imgSpan}>
                ⬆️{calculateTotalDeposit(transactions)}
            </span>
            $
        </span>
        <span className={styles.description}>
            <span role="img" aria-label="img" className={styles.imgSpan}>
                ⬇️{calculateTotalWithdraw(transactions)}
            </span>
            $
        </span>
        <span className={styles.description}>Balance: {balance}$</span>
    </section>
);

Balance.defaultProps = {
    transactions: [],
};

Balance.propTypes = {
    balance: PropTypes.number.isRequired,
    transactions: PropTypes.arrayOf(PropTypes.object),
};

export default Balance;
