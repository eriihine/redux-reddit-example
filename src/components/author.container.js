import React, {Component} from "react";
import {connect} from "react-redux";
import AuthorList from "./author-list.component";
import {withRouter} from "react-router-dom";
import {loadRedditsByAuthor} from "../actions/reddit.actions";

class AuthorContainer extends Component {
  static mapStateToProps = (state) => {
    return {
      redditsByAuthor: state.reddits.redditsByAuthor,
    };
  };

  static mapDispatchToProps = {
    loadRedditsByAuthor,
  };

  componentDidMount() {
    const {match} = this.props;
    const {author} = match.params;
    this.props.loadRedditsByAuthor(author);

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <AuthorList
        data={this.props.redditsByAuthor}
        history={this.props.history}
      />
    );
  }
}

export default withRouter(
  connect(
    AuthorContainer.mapStateToProps,
    AuthorContainer.mapDispatchToProps,
  )(AuthorContainer),
);
