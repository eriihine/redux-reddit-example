import React from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

import RedditItem from "./reddit-item";
import Header from "./header.component";

const RedditList = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 1rem;
`;

const StyledInfiniteScroll = styled(InfiniteScroll)`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  align-items: center;
`;

const Loader = styled.div``;

class RedditListComponent extends React.Component {
  getItems = () => {
    const {filterImages, data, loading} = this.props;
    return data.map((item) => (
      <RedditItem
        key={item.data.id}
        item={item}
        loading={loading}
        filterImages={filterImages}
      />
    ));
  };

  render() {
    const {
      setFilterImages,
      clearRedditStore,
      search,
      filterImages,
      after,
      randomSearch,
    } = this.props;

    return (
      <RedditList>
        <Header
          setFilterImages={setFilterImages}
          clearRedditStore={clearRedditStore}
          search={search}
          filterImages={filterImages}
          randomSearch={randomSearch}
        />
        <StyledInfiniteScroll
          pageStart={0}
          initialLoad={false}
          loadMore={this.props.loadMoreReddits}
          hasMore={after != null}
          loader={<Loader key={0}>Loading ...</Loader>}>
          {this.getItems()}
        </StyledInfiniteScroll>
      </RedditList>
    );
  }
}

export default RedditListComponent;
