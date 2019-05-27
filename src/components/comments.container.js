import React, {Component} from "react";
import {connect} from "react-redux";
import CommentList from "./comment-list.component";
import {withRouter} from "react-router-dom";
import {loadComments} from "../actions/reddit.actions";

class CommentsContainer extends Component {
  static mapStateToProps = (state) => {
    return {
      comments: state.reddits.comments,
    };
  };

  static mapDispatchToProps = {
    loadComments,
  };

  componentDidMount() {
    const {location} = this.props;
    const params = new URLSearchParams(location.search);
    const permalink = params.get("permalink");
    this.props.loadComments(permalink);

    window.scrollTo(0, 0);
  }

  onSearchTermChange = (e) => this.props.searchReddits(e.target.value);

  render() {
    return (
      <CommentList
        comments={this.props.comments}
        history={this.props.history}
      />
    );
  }
}

export default withRouter(
  connect(
    CommentsContainer.mapStateToProps,
    CommentsContainer.mapDispatchToProps,
  )(CommentsContainer),
);
