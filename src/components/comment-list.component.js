import React from "react";
import styled from "styled-components";
import Button from "./button.component";

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
`;

const Comment = styled.div`
  background-color: #fff;
  margin: 10px 20px 10px 20px;
  padding: 10px;
  width: 70%;
  overflow-wrap: break-word;
`;

export default ({comments, history}) => {
  const commentList = comments.length > 1 ? comments[1].data.children : [];
  return (
    <Wrapper>
      <Button onClick={history.goBack}>Go back</Button>
      {commentList.map((comment) => (
        <Comment key={comment.data.id}>{comment.data.body}</Comment>
      ))}
    </Wrapper>
  );
};
