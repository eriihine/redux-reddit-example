import React from "react";
import styled from "styled-components";
import Button from "./button.component";
import {Link} from "react-router-dom";

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

const CommentBody = styled.div`
  margin: 10px 0 10px 0;
`;

const CommentCount = styled.i``;

export default ({comments, history}) => {
  const commentList = comments.length > 1 ? comments[1].data.children : [];
  return (
    <Wrapper>
      <Button onClick={history.goBack}>Go back</Button>
      {commentList.map(
        (comment) =>
          console.log(comment) || (
            <React.Fragment key={comment.data.id}>
              <Comment>
                <Link to={`/user/${comment.data.author}`}>
                  <i>posted by {comment.data.author}</i>
                </Link>
                <CommentBody>{comment.data.body}</CommentBody>
                <CommentCount>
                  comments:{" "}
                  {comment.data.replies
                    ? comment.data.replies.data.children.length
                    : 0}
                </CommentCount>
              </Comment>
            </React.Fragment>
          ),
      )}
    </Wrapper>
  );
};
