// Write your code here
// Write your code here
import React from 'react'
import './index.css'

class AppItem extends React.Component {
  render() {
    const {appList} = this.props
    const {appName, imageUrl} = appList

    return (
      <li className="app-item">
        <img className="app-image" src={imageUrl} alt={appName} />

        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
