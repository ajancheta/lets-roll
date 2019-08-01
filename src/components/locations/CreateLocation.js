import React, { Component } from 'react';
import { createLocation} from '../../store/actions/LocationActions';
import { connect } from 'react-redux';

class CreateLocation extends Component {
  state = {
    name: '',
    address: '',
    day: '',
    hours: '',
    website: '',
    IG: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createLocation(this.state)
  }

  render() {
    return (
      <div className="create-location-container">
        <form onSubmit={this.handleSubmit}>
          <label>School Name:</label>
          <input type="text" onChange={this.handleChange} />
          <button>Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createLocation: (location) => dispatch(createLocation(location))
  }
} 

export default connect(null, mapDispatchToProps)(CreateLocation);