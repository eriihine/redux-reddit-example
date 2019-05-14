import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getReddits} from '../actions/reddit.actions';

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Reddit = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: white;
  min-height: 60px;
  font-weight: bold;
  width: 70%;
  border: 1px solid #dfe1e5;
  border-radius: 4px;
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

class App extends Component {
  static mapStateToProps = (state) => {
    return {
      data: state.reddits.data,
    };
  };

  static mapDispatchToProps = {
    getReddits,
  };

  componentDidMount() {
    this.props.getReddits();
  }

  render() {
    return (
      <Wrapper>
        <SearchInput placeholder='search term: e.g. /r/suomi' />{' '}
        {this.props.data.map((item) => (
          <Reddit key={item.data.id}> {item.data.title} </Reddit>
        ))}
      </Wrapper>
    );
  }
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps,
)(App);
