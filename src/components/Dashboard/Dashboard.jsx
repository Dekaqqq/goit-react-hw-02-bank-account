import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

class Dashboard extends Component {
    state = {
        transactions: [],
        balance: 0,
    };

    componentDidMount() {
        this.setState({
            transactions: JSON.parse(localStorage.getItem('transactions'))
                ? JSON.parse(localStorage.getItem('transactions'))
                : [],
            balance: JSON.parse(localStorage.getItem('balance'))
                ? JSON.parse(localStorage.getItem('balance'))
                : 0,
        });
    }

    componentDidUpdate(prevState) {
        const { transactions, balance } = this.state;

        if (prevState.transactions !== transactions) {
            localStorage.setItem('transactions', JSON.stringify(transactions));
            localStorage.setItem('balance', JSON.stringify(balance));
        }
    }

    handleTransactions = transaction => {
        this.setState(prev => ({
            transactions: [...prev.transactions, transaction],
            balance:
                transaction.type === 'deposit'
                    ? prev.balance + transaction.amount
                    : prev.balance - transaction.amount,
        }));
    };

    render() {
        const { transactions, balance } = this.state;

        return (
            <div className={styles.dashboard}>
                <Controls
                    balance={balance}
                    handleTransactions={this.handleTransactions}
                />
                <Balance balance={balance} transactions={transactions} />
                <TransactionHistory transactions={transactions} />
            </div>
        );
    }
}

export default Dashboard;
