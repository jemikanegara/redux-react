import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo } from "../action/todoAction";
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

  handleSubmit = e => {
    this.props.createTodo({
      description: this.state.description,
      done: false
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
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect(
  null,
  {
    createTodo
  }
)(Form);
