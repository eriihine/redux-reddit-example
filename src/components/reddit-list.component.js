import React from 'react';
import styled from 'styled-components';
import RedditItem from './reddit-item';
import Header from './header.component';

const RedditList = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export default (props) => (
  <RedditList>
    <Header
      setFilterImages={props.setFilterImages}
      clearRedditStore={props.clearRedditStore}
      search={props.search}
      filterImages={props.filterImages}
    />
    {props.data.map((item) => (
      <RedditItem
        key={item.data.id}
        item={item}
        loading={props.loading}
        filterImages={props.filterImages}
      />
    ))}
  </RedditList>
);
