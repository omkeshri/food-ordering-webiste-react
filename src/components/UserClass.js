import React from "react";
import { defer } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count : 0,
        count2 : 1
    };
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button onClick={() => {
            this.setState(
                {count: this.state.count+1}
            )
        }}>
            Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: </h3>
      </div>
    );
  }
}

export default UserClass;
