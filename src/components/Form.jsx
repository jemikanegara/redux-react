import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleOnChange}
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default Form;
