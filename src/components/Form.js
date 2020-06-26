import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  
  
  
  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value 
    const lastName = event.target.children[1].value 
    this.sendFormDataSomewhere({ firstName, lastName })
  }
  
  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      
    })
    return this.state.submitted
  }
  

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;