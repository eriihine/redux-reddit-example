import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 70%;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  height: 40px;
  border-radius: 16px;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #f1f1f1;
  }
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
    <SearchInput onChange={props.search} />
    <Button>Clear</Button>
    <Button>Images only</Button>
  </Header>
);
