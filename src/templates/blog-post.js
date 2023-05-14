import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import renderHTML from 'react-render-html';
//  chakra ui
import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
//  components
import Seo from '../components/seo';
import FeaturedImage from '../components/feaured-image';
//  utiltities
import getRemoveLeadAndEndCharacter from '../utilities/strings/remove-lead-and-end-character';

const BlogPost = (props) => {
  const { data = {} } = props;
  const { markdownRemark = {}, next = {}, previous = {} } = data;
  const {
    excerpt = '',
    fields = {},
    frontmatter = {},
    html = '',
    id = '',
  } = markdownRemark;
  const { slug } = fields;
  const {
    title = '',
    date = '',
    meta_description = '',
    meta_keywords,
    settings_featured_image = {},
    twitter_tags = '',
  } = frontmatter;
  const { alt: featuredAlt, src: featuredSrc } = settings_featured_image;
  const textColorPublishDate = useColorModeValue('gray.500', 'gray.400');

  return (
    <>
      <Heading as="h1" size="lg">
        {title}
      </Heading>
      <Text color={textColorPublishDate} size="sm">
        {date}
      </Text>
      <Divider borderColor="#FFDE59" marginBottom="1em" marginTop="1em" />
      {featuredSrc !== '' && (
        <>
          <Box display="flex" justifyContent="center" alignItems="center">
            <AspectRatio width="100%" maxW="700px" ratio={16 / 9}>
              <FeaturedImage
                alt={featuredAlt || ''}
                filename={getRemoveLeadAndEndCharacter({
                  value: featuredSrc,
                  character: { end: '/', lead: '/' },
                })}
              />
            </AspectRatio>
          </Box>
          <Divider borderColor="#FFDE59" marginBottom="1em" marginTop="1em" />
        </>
      )}
      <Box className="blog-post-content">{renderHTML(html)}</Box>
      <Divider borderColor="#FFDE59" marginBottom="1em" marginTop="1em" />
      <HStack>
        <Box>
          {previous && (
            <Link as={GatsbyLink} to={previous.fields.slug} rel="prev">
              <ArrowBackIcon mx="2px" /> {previous.frontmatter.title}
            </Link>
          )}
        </Box>
        <Box>
          {next && (
            <Link as={GatsbyLink} to={next.fields.slug} rel="next">
              {next.frontmatter.title} <ArrowForwardIcon mx="2px" />
            </Link>
          )}
        </Box>
      </HStack>
    </>
  );
};

export default BlogPost;

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title || 'Blog Post'}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug(
    $path: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD-MMM-YYYY")
        meta_description
        meta_keywords
        settings_featured_image {
          alt
          src
          title
        }
        twitter_tags
      }
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        meta_description
        meta_keywords
        settings_featured_image {
          alt
          src
          title
        }
        twitter_tags
      }
      fields {
        slug
      }
      headings {
        id
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        meta_description
        meta_keywords
        settings_featured_image {
          alt
          src
          title
        }
        twitter_tags
      }
      fields {
        slug
      }
      headings {
        id
      }
    }
  }
`;
