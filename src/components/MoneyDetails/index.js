import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, IncomeAmount, ExpenseAmount} = props

  return (
    <div className="cardsContainer">
      <div className="balanceCard Card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="imageIcon"
        />
        <div>
          <p className="typeOfBalanceText">Your Balance</p>
          <p className="amountNum" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="incomeCard Card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="imageIcon"
        />
        <div>
          <p className="typeOfBalanceText">Your Income</p>
          <p className="amountNum" testid="incomeAmount">
            Rs {IncomeAmount}
          </p>
        </div>
      </div>
      <div className="ExpensesCard Card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="imageIcon"
        />
        <div>
          <p className="typeOfBalanceText">Your Expenses</p>
          <p className="amountNum" testid="expensesAmount">
            Rs {ExpenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
