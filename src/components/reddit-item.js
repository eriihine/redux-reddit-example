import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logo from "../resources/logo.png";

const Item = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: white;
  min-height: 60px;
  width: 70%;
  border: 1px solid #dfe1e5;
  border-radius: 4px;
`;

const Title = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`;

const TitleText = styled.div`
  font-weight: bold;
  margin-left: 0.5rem;
`;

const SubRedditTittle = styled.div`
  margin-bottom: 4px;
`;

const SelfText = styled.div`
  margin: 1rem;
  overflow-wrap: break-word;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Logo = styled.img`
  height: 20px;
`;

class RedditItem extends React.Component {
  escape = (url) => url.replace(/&amp;/g, "&");

  getImageUrl = (data) =>
    data.preview.images[0].resolutions.length
      ? this.escape(data.preview.images[0].resolutions.pop().url)
      : "";

  render() {
    const {data} = this.props.item;
    const {title, selftext, author, link_id, subreddit_name_prefixed} = data;
    const previewEnabled = data.preview && data.preview.enabled;

    // skip reddits that do not have images, if filter images is true
    // skip also comments if in the listing (no link_id)
    if ((!previewEnabled && this.props.filterImages) || link_id) return null;

    return (
      !this.props.loading && (
        <Item>
          <SubRedditTittle>{subreddit_name_prefixed}</SubRedditTittle>
          <Link to={`/user/${author}`}>
            <i>posted by {author}</i>
          </Link>
          <Title>
            <Logo src={logo} />
            <TitleText>{title}</TitleText>
          </Title>
          <SelfText>{selftext}</SelfText>
          {previewEnabled ? (
            <Image key={`image-${data.id}`} src={this.getImageUrl(data)} />
          ) : null}
          <Link
            to={{
              pathname: "/comments",
              search: `?permalink=${data.permalink}`,
            }}>
            comments: {data.num_comments}
          </Link>
        </Item>
      )
    );
  }
}

export default RedditItem;
