// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}

  btn = event => {
    this.setState({
      search: event.target.value,
    })
  }

  render() {
    const {search} = this.state

    const {destinationsList} = this.props
    const result = destinationsList.filter(each =>
      each.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="greet">
        <h1>Destination search</h1>
        <div className="greet55">
          <div>
            <input type="search" placeholder="search" onChange={this.btn} />
          </div>
          <div>
            <img
              alt="avatar"
              className="image258"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
        </div>

        <div className="greet2">
          {result.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
