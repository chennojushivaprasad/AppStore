// Write your code here
import React from 'react'
import './index.css'

class TabItem extends React.Component {
  updateTab = () => {
    const {updateTabItem, tabsList} = this.props
    const {tabId} = tabsList
    updateTabItem(tabId)
  }

  render() {
    const {tabsList, isActive} = this.props
    const {displayText} = tabsList

    return (
      <li className="item">
        <button
          className={`button ${isActive ? 'active-tab' : ''}`}
          type="button"
          onClick={this.updateTab}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
