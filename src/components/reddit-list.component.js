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
    <Header search={props.search} />
    {props.data.map((item) => (
      <RedditItem key={item.data.id} item={item} />
    ))}
  </RedditList>
);
