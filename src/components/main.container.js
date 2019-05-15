import React, {Component} from 'react';
import {connect} from 'react-redux';
import RedditList from './reddit-list.component';

import {getReddits} from '../actions/reddit.actions';

class App extends Component {
  static mapStateToProps = (state) => {
    return {
      data: state.reddits.data,
    };
  };

  static mapDispatchToProps = {
    getReddits,
  };

  componentDidMount() {
    this.props.getReddits();
  }

  onSearchTermChange = (e) => this.props.getReddits(e.target.value);

  render() {
    return (
      <RedditList data={this.props.data} search={this.onSearchTermChange} />
    );
  }
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps,
)(App);
