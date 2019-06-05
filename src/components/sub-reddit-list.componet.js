import React from "react";
import styled from "styled-components";
import RedditItem from "./reddit-item";
import Button from "./button.component";

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
`;

export default ({data, history}) => (
  <Wrapper>
    <Button onClick={history.goBack}>Go back</Button>
    {data.map((item) => (
      <RedditItem key={item.data.id} item={item} />
    ))}
  </Wrapper>
);
