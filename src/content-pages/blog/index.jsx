import React from 'react';
//  chakra-ui
import { Text } from '@chakra-ui/react';
//  posts
import BlogPosts from './posts';

const ContentHomePage = (props) => {
  const { data } = props;
  const { edges = [], searchResults = [] } = data.allMarkdownRemark;
  const searchResultsLength = searchResults.length || 0;

  if (edges.length === 0) {
    return (
      <>
        <Text>There are no posts. Please come back later.</Text>
      </>
    );
  }

  return (
    <>
      {searchResultsLength === 0 && <BlogPosts data={edges} />}
      {searchResultsLength > 0 && <BlogPosts data={searchResults} />}
    </>
  );
};

export default ContentHomePage;
