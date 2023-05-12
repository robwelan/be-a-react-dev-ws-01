import React from 'react';
//  chakra-ui
import { Container, Text } from '@chakra-ui/react';
//  posts
import BlogPosts from './posts';

const ContentHomePage = (props) => {
  const { data } = props;
  const { edges = [], searchResults = [] } = data.allMarkdownRemark;
  const searchResultsLength = searchResults.length || 0;

  if (edges.length === 0) {
    return (
      <>
        <Container maxW="6xl" sx={{ marginBottom: '2em' }}>
          <Text>There are no posts. Please come back later.</Text>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container maxW="6xl" sx={{ marginBottom: '2em' }}>
        <>
          {searchResultsLength === 0 && <BlogPosts data={edges} />}
          {searchResultsLength > 0 && <BlogPosts data={searchResults} />}
        </>
      </Container>
    </>
  );
};

export default ContentHomePage;
