import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'
// import {each} from 'immer/dist/internal'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    InputAmount: '',
    InputTitle: '',
    inputId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({InputTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({InputAmount: event.target.value})
  }

  onChangeId = event => {
    this.setState({inputId: event.target.value})
  }

  onAddHistoryTransaction = event => {
    event.preventDefault()
    const {InputAmount, InputTitle, inputId} = this.state
    const optionType = transactionTypeOptions.find(
      each => each.optionId === inputId,
    )

    const newTransaction = {
      id: v4(),
      Amount: parseInt(InputAmount),
      title: InputTitle,
      type: optionType.displayText,
    }
    this.setState(prevSta => ({
      transactionList: [...prevSta.transactionList, newTransaction],
      InputAmount: '',
      InputTitle: '',
      inputId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalanceAmount = () => {
    let IncomeAmount = 0
    let ExpenseAmount = 0
    let balanceAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(eachOption => {
      if (eachOption.type === transactionTypeOptions[0].displayText) {
        IncomeAmount += eachOption.Amount
      } else {
        ExpenseAmount += eachOption.Amount
      }
    })

    balanceAmount = IncomeAmount - ExpenseAmount
    return balanceAmount
  }

  getIncomeAmount = () => {
    let IncomeAmount = 0

    const {transactionList} = this.state
    transactionList.forEach(eachOption => {
      if (eachOption.type === transactionTypeOptions[0].displayText) {
        IncomeAmount += eachOption.Amount
      }
    })

    return IncomeAmount
  }

  getExpenseAmount = () => {
    let ExpenseAmount = 0

    const {transactionList} = this.state
    transactionList.forEach(eachOption => {
      if (eachOption.type === transactionTypeOptions[1].displayText) {
        ExpenseAmount += eachOption.Amount
      }
    })

    return ExpenseAmount
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
      each => each.id !== id,
    )
    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  render() {
    const {transactionList, InputAmount, InputTitle, inputId} = this.state
    console.log(InputAmount, InputTitle, inputId, transactionList)
    const balanceAmount = this.getBalanceAmount()
    const IncomeAmount = this.getIncomeAmount()
    const ExpenseAmount = this.getExpenseAmount()
    return (
      <div className="moneyManagerContainer">
        <div className="greetingCard">
          <h1> Hi ,Richard</h1>
          <p>
            welcome back to your
            <span className="spanElement">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          IncomeAmount={IncomeAmount}
          ExpenseAmount={ExpenseAmount}
        />

        <div className="TransactionAndHistory">
          <div className="add-transaction-form">
            <form onSubmit={this.onAddHistoryTransaction}>
              <h1 className="addTransaction">Add Transaction</h1>
              <label htmlFor="title" className="labelElement">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="title"
                className="inputElement"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                value={InputTitle}
              />
              <br />

              <label htmlFor="amount" className="labelElement">
                AMOUNT
              </label>
              <br />
              <input
                id="amount"
                type="text"
                className="inputElement"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                value={InputAmount}
              />
              <br />
              <label htmlFor="select" className="labelElement">
                TYPE
              </label>
              <br />
              <select
                className="inputElement"
                onChange={this.onChangeId}
                id="select"
                value={inputId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit">Add</button>
            </form>
          </div>

          <div className="historyContainer">
            <h1 className="historyHead">History</h1>
            <ul>
              <li className="historyList">
                <p className="w-25%">Title</p>
                <p className="w-25%">Amount</p>
                <p className="w-25%">Type</p>
                <p className="w-25%">{}</p>
              </li>
            </ul>

            {transactionList.map(each => (
              <TransactionItem
                key={each.id}
                eachTransaction={each}
                onDeleteTransaction={this.onDeleteTransaction}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
