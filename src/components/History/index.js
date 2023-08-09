import {Component} from 'react'
import './index.css'

const History = props => {
  const {history, deleteItem} = props
  const {id} = history

  const handleDeleteBtn = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="time-logo-container">
        <div className="history-time">
          <p>{history.timeAccessed}</p>
        </div>
        <div className="logo-url">
          <img src={history.logoUrl} alt="domain logo" />
        </div>
      </div>

      <div className="title-container">
        <div className="title">
          <p>{history.title}</p>
        </div>
        <div className="domain-url">
          <p>{history.domainUrl}</p>
        </div>
      </div>

      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={handleDeleteBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default History
