import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getSubReddit} from "../actions/reddit.actions";
import SubRedditList from "./sub-reddit-list.componet";

class SubRedditContainer extends React.Component {
  static mapStateToProps = (state) => ({
    data: state.reddits.data,
  });
  static mapDispatchToProps = {
    getSubReddit,
  };

  componentDidMount() {
    const {match} = this.props;
    const {param1, param2} = match.params;
    this.props.getSubReddit(`${param1}/${param2}`);
  }

  render() {
    const {data, history} = this.props;
    return <SubRedditList data={data} history={history} />;
  }
}
export default withRouter(
  connect(
    SubRedditContainer.mapStateToProps,
    SubRedditContainer.mapDispatchToProps,
  )(SubRedditContainer),
);
