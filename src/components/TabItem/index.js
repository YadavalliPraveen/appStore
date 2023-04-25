import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className={`tab-item-container ${activeTabBtnClassName}`}>
      <button onClick={onClickTabItem} className="tab-btn" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
