import React, {Component} from 'react';
import {connect} from 'react-redux';
import RedditList from './reddit-list.component';

import {
  searchReddits,
  getSubReddit,
  clearRedditStore,
} from '../actions/reddit.actions';
import {setFilterImages} from '../actions/app.actions';

class App extends Component {
  static mapStateToProps = (state) => {
    return {
      data: state.reddits.data,
      loading: state.reddits.loading,
      filterImages: state.app.filterImages,
    };
  };

  static mapDispatchToProps = {
    searchReddits,
    getSubReddit,
    clearRedditStore,
    setFilterImages,
  };

  componentDidMount() {
    this.props.getSubReddit('r/suomi');
  }

  onSearchTermChange = (e) => this.props.searchReddits(e.target.value);

  render() {
    return (
      <RedditList
        setFilterImages={this.props.setFilterImages}
        clearRedditStore={this.props.clearRedditStore}
        data={this.props.data}
        search={this.onSearchTermChange}
        loading={this.props.loading}
        filterImages={this.props.filterImages}
      />
    );
  }
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps,
)(App);
