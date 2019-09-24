import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import styles from './Controls.module.css';

class Controls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
        };
    }

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value,
        });
    };

    handleClick = ({ target }) => {
        const { amount } = this.state;
        const { name } = target;
        const { balance, handleTransactions } = this.props;

        const transaction = {
            id: shortid.generate(),
            type: name,
            amount: Number(amount),
            date: new Date().toLocaleString(),
        };

        if (amount > balance && name === 'withdraw') {
            this.notifyNotEnough();

            this.reset();

            return;
        }

        if (!amount) {
            this.notifyEmptyInput();

            return;
        }

        handleTransactions(transaction);

        this.reset();
    };

    reset = () => {
        return this.setState({
            amount: '',
        });
    };

    notifyNotEnough = () => {
        toast.error('На счету недостаточно средств для проведения операции!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    notifyEmptyInput = () => {
        toast.error('Введите сумму для проведения операции!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    render() {
        const { amount } = this.state;

        return (
            <div>
                <section className={styles.controls}>
                    <input
                        type="number"
                        className={styles.valueInput}
                        name="amount"
                        value={amount}
                        onChange={this.handleChange}
                    />
                    <button
                        type="button"
                        className={styles.button}
                        name="deposit"
                        onClick={this.handleClick}
                    >
                        Deposit
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        name="withdraw"
                        onClick={this.handleClick}
                    >
                        Withdraw
                    </button>
                    <ToastContainer autoClose={1500} />
                </section>
            </div>
        );
    }
}

Controls.propTypes = {
    balance: PropTypes.number.isRequired,
    handleTransactions: PropTypes.func.isRequired,
};

export default Controls;
