const calculateTotalDeposit = transactions =>
    transactions.length
        ? transactions
              .filter(el => el.type === 'deposit')
              .reduce((acc, el) => acc + el.amount, 0)
        : 0;

const calculateTotalWithdraw = transactions =>
    transactions.length
        ? transactions
              .filter(el => el.type === 'withdraw')
              .reduce((acc, el) => acc + el.amount, 0)
        : 0;

export { calculateTotalDeposit, calculateTotalWithdraw };
