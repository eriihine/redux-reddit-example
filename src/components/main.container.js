import React, {Component} from 'react';
import {connect} from 'react-redux';
import RedditList from './reddit-list.component';

import {searchReddits, getSubReddit} from '../actions/reddit.actions';

class App extends Component {
  static mapStateToProps = (state) => {
    return {
      data: state.reddits.data,
    };
  };

  static mapDispatchToProps = {
    searchReddits,
    getSubReddit,
  };

  componentDidMount() {
    this.props.getSubReddit('r/suomi');
  }

  onSearchTermChange = (e) => this.props.searchReddits(e.target.value);

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
