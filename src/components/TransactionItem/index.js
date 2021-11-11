import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteTransaction} = props
  const {Amount, title, type, id} = eachTransaction
  const onDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="eachHistory">
      <p className="w-25% ">{title}</p>
      <p className="w-25%">rs{Amount}</p>
      <p className="w-25%">{type}</p>
      <button type="button" className="delete-button w-25%">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          testid="delete"
          className="delete-img"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default TransactionItem
