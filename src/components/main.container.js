import React, {Component} from "react";
import {connect} from "react-redux";
import RedditList from "./reddit-list.component";

import {
  searchReddits,
  clearRedditStore,
  loadMoreReddits,
} from "../actions/reddit.actions";
import {setFilterImages} from "../actions/app.actions";

class App extends Component {
  static mapStateToProps = (state) => {
    return {
      data: state.reddits.data,
      loading: state.reddits.loading,
      filterImages: state.app.filterImages,
      after: state.reddits.after,
      searchTerm: state.reddits.searchTerm,
    };
  };

  static mapDispatchToProps = {
    searchReddits,
    clearRedditStore,
    setFilterImages,
    loadMoreReddits,
  };

  componentDidMount() {
    const {searchTerm} = this.props;
    this.props.searchReddits(searchTerm || "suomi");
  }

  onSearchTermChange = (e) => this.props.searchReddits(e.target.value);

  render() {
    return (
      <RedditList
        setFilterImages={this.props.setFilterImages}
        clearRedditStore={this.props.clearRedditStore}
        loadMoreReddits={this.props.loadMoreReddits}
        data={this.props.data}
        search={this.onSearchTermChange}
        loading={this.props.loading}
        filterImages={this.props.filterImages}
        after={this.props.after}
      />
    );
  }
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps,
)(App);
