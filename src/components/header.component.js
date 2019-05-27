import React from "react";
import styled from "styled-components";
import Button from "./button.component";

const Header = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 70%;
  align-items: center;
`;

const SearchInput = styled.input`
  height: 2rem;
  width: 70%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  text-indent: 1rem;
  :focus {
    outline: none;
  }
`;
export default (props) => (
  <Header>
    <SearchInput placeholder="Search.." onChange={props.search} />
    <Button onClick={props.clearRedditStore}>Clear</Button>
    <Button onClick={props.setFilterImages}>
      {props.filterImages ? "All posts" : "Images only"}
    </Button>
  </Header>
);
