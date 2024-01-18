import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {value: countryAndCapitalsList[0].id}

  getValue = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {value} = this.state
    const filteredList = countryAndCapitalsList.find(each => each.id === value)

    console.log(filteredList)
    console.log(filteredList.country)

    return (
      <div className="bg-container">
        <div className="container1">
          <h1>Countries and Capitals</h1>
          <div className="con1">
            <select value={value} className="button" onChange={this.getValue}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="passage">is capital of which country?</p>
          </div>
          <p className="para">{filteredList.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
