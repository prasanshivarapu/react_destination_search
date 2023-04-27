import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <div className="greet1">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </div>
  )
}

export default DestinationItem
