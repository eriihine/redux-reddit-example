import React from 'react';
import styled from 'styled-components';

const RedditItem = styled.div`
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

export default (props) => (
  <RedditItem>
    <Title>{props.item.data.title}</Title>
    <SelfText>{props.item.data.selftext}</SelfText>
  </RedditItem>
);
