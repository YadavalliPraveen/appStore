import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <div className="img-and-title-container">
      <li className="app-item-container">
        <img className="app-item-image" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
