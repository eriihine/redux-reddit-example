import React from 'react';
import styled from 'styled-components';

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
  font-weight: bold;
  margin: 1rem;
`;

const SelfText = styled.div`
  margin: 1rem;
  overflow-wrap: break-word;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

class RedditItem extends React.Component {
  escape = (url) => url.replace(/&amp;/g, '&');

  getImageUrl = (data) =>
    data.preview.images[0].resolutions.length
      ? this.escape(data.preview.images[0].resolutions.pop().url)
      : '';

  render() {
    const {data} = this.props.item;
    const {title, selftext} = data;
    const previewEnabled = data.preview && data.preview.enabled;
    return (
      <Item>
        <Title>{title}</Title>
        <SelfText>{selftext}</SelfText>
        {previewEnabled ? (
          <Image key={`image-${data.jd}`} src={this.getImageUrl(data)} />
        ) : null}
      </Item>
    );
  }
}

export default RedditItem;
