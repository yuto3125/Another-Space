import React, { Component } from 'react';

class HistoryExample extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  goHome = () => {
    this.props.history.push('/');
  };
  componentDidMount() {
    this.unblock = this.props.history.block(
      "Are you sure you're leaving this site?"
    );
  }
  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div className="his_menu">
        <button
          onClick={this.goBack}
          title="If You click this, You will be moved to the previous site. ">
          Back
        </button>
        <button onClick={this.goHome} title="Go to Home Page">
          Home
        </button>
      </div>
    );
  }
}
export default HistoryExample;
