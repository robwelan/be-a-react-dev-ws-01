import React from 'react';
//  chakra ui
import { Grid, GridItem } from '@chakra-ui/react';
//  recoil
import { useRecoilValue } from 'recoil';
//  hooks
import useSiteMetadata from '../../hooks/use-site-meta-data';
//  components
import BlogPostCard from './post-card';
//  recoil state
import { siteConfiguration } from '../../state';

type Edge = {
  node: {
    id: string;
  };
};

type Props = {
  data: [Edge];
};

const BlogPosts = (props: Props) => {
  const { data } = props;
  const configuration = useRecoilValue(siteConfiguration);
  const { device } = configuration;
  const siteMetadata = useSiteMetadata();
  const { title = '' } = siteMetadata;

  if (!configuration.loaded) return null;

  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(1, 1fr)',
      }}
      gap={4}
    >
      <>
        {data.map((edge) => (
          <GridItem key={edge.node.id}>
            <BlogPostCard device={device} post={edge.node} title={title} />
          </GridItem>
        ))}
      </>
    </Grid>
  );
};

export default BlogPosts;
