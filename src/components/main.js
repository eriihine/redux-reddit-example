import React, { Component } from "react";
import { connect } from "react-redux";
import { getReddits } from "../actions/actions";

class App extends Component {
  static mapStateToProps = state => {
    return {
      redditsList: state.reddits
    };
  };

  static mapDispatchToProps = {
    getReddits
  };

  componentDidMount() {
    this.props.getReddits();
  }

  render() {
    return this.props.redditsList.map(item => (
      <div key={item.data.id}>{item.data.title}</div>
    ));
  }
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps
)(App);
