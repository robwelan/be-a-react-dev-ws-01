import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
//  chakra ui
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
//  gatsby-plugin-image
import { GatsbyImage } from 'gatsby-plugin-image';
//  react icons
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
//  components
import AmazonAffiliateLinks from '../components/blog-post/amazon-affiliate-links';
import Seo from '../components/seo';
import ProductPush from '../components-templates/bottom-product-push';
import { asComponent } from '../components/blog-parse-html.tsx';
//  utiltities
import getImage from '../utilities/graphql-content/get-image';
import getTwitterButtonContent from '../utilities/strings/get-twitter-button-content';

const BlogPost = (props) => {
  const { data = {}, location = {} } = props;
  const {
    allImageSharp = {},
    markdownRemark = {},
    next = {},
    previous = {},
  } = data;
  const { fields = {}, frontmatter = {}, html = '', id = '' } = markdownRemark;
  const { date_updated, slug } = fields;
  const {
    title = '',
    date = '',
    meta_description = '',
    meta_keywords,
    settings_featured_image = {},
    twitter_tags = '',
  } = frontmatter;
  const {
    alt: featuredAlt,
    src: featuredSrc,
    title: featuredTitle,
  } = settings_featured_image;
  const textColorPublishDate = useColorModeValue('gray.500', 'gray.400');
  const twitterButtonContent = getTwitterButtonContent({
    main: meta_description || '',
    tags: twitter_tags || '',
    url: location.href || '',
  });
  const featuredImage = getImage({
    images: allImageSharp.edges || [],
    image: {
      alt: featuredAlt,
      src: featuredSrc,
      title: featuredTitle,
    },
  });

  return (
    <>
      <HStack>
        <Box>
          <Heading as="h1" size="lg">
            {title}
          </Heading>
          <Text color={textColorPublishDate} fontSize="xs">
            {date}
          </Text>
        </Box>
        <Spacer />
        {twitterButtonContent && twitterButtonContent.success && (
          <Box>
            <Button
              as={Link}
              colorScheme="twitter"
              href={twitterButtonContent.href}
              isExternal
              leftIcon={<FaTwitter />}
              variant="solid"
            >
              Tweet
            </Button>
          </Box>
        )}
      </HStack>
      <Divider borderColor="#FFDE59" marginBottom="1em" marginTop="1em" />

      <AmazonAffiliateLinks />

      <Divider borderColor="#FFDE59" marginBottom="1em" marginTop="1em" />
      <Text fontSize="xs" marginBottom="1em">
        {meta_description}
      </Text>
      {featuredSrc !== '' && (
        <>
          <Box display="flex" justifyContent="center" alignItems="center">
            <AspectRatio width="100%" maxW="700px" ratio={16 / 9}>
              <GatsbyImage
                alt={featuredAlt}
                image={{
                  ...featuredImage.image,
                }}
              />
            </AspectRatio>
          </Box>
          <Divider borderColor="#FFDE59" marginBottom="1em" marginTop="1em" />
        </>
      )}

      <article>{asComponent(html)}</article>

      <ProductPush />

      <Divider borderColor="#FFDE59" marginBottom="1em" marginTop="2em" />
      <HStack>
        <Box>
          {previous && (
            <Link as={GatsbyLink} to={previous.fields.slug} rel="prev">
              <ArrowBackIcon mx="2px" /> {previous.frontmatter.title}
            </Link>
          )}
        </Box>
        <Spacer />
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

export const Head = (props) => {
  const {
    data: { allImageSharp = {}, markdownRemark: post },
    location,
  } = props;
  const { excerpt, frontmatter } = post;
  const {
    meta_description,
    meta_keywords,
    settings_featured_image,
    twitter_tags,
  } = frontmatter;
  const {
    alt: featuredAlt,
    src: featuredSrc,
    title: featuredTitle,
  } = settings_featured_image;
  const featuredImage = getImage({
    images: allImageSharp.edges || [],
    image: {
      alt: featuredAlt,
      src: featuredSrc,
      title: featuredTitle,
    },
  });

  return (
    <Seo
      description={meta_description || excerpt}
      image={{
        alt: featuredImage.alt,
        src: featuredImage.image.images.fallback.src,
        title: featuredImage.title,
      }}
      keywords={meta_keywords}
      location={location}
      title={post.frontmatter.title || 'Blog Post'}
      twitter_tags={twitter_tags}
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
        date_created(formatString: "DD-MMM-YYYY")
        date_updated(formatString: "DD-MMM-YYYY")
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
    allImageSharp {
      edges {
        node {
          gatsbyImageData
          fluid {
            originalName
            src
          }
          fixed {
            originalName
            src
          }
        }
      }
    }
  }
`;
