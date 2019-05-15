import React from 'react';
import styled from 'styled-components';

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
export default (props) => <SearchInput onChange={props.search} />;
