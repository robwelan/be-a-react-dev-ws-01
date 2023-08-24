import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
//  chakra ui
import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
//  components
import FeaturedImage from '../../../components/feaured-image';
//  utiltities
import getRemoveLeadAndEndCharacter from '../../../utilities/strings/remove-lead-and-end-character';

type Props = {
  device: {
    type: {
      isMobile: boolean;
    };
  };
  post: {
    excerpt: string;
    fields: {
      slug: string;
      date_updated: Date;
    };
    frontmatter: {
      date: Date;
      settings_featured_image: {
        alt: string;
        src: string;
      };
      title: string;
    };
    timeToRead: number;
  };
};

const BlogPostCard = (props: Props) => {
  const { device, post } = props;
  const { type } = device;
  const { isMobile } = type;
  const { excerpt, fields, frontmatter, timeToRead } = post;
  const { date_updated, slug } = fields;
  const { date, settings_featured_image, title } = frontmatter;
  const { alt: featuredAlt = '', src: featuredSrc = '' } =
    settings_featured_image;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Flex gap={4}>
        <Box>
          <Box sx={{ marginLeft: '0.5em', marginRight: '0.5em' }}>
            <Link as={GatsbyLink} to={slug}>
              <Text fontSize="xs">
                <>{date}</>
              </Text>
              <Heading as="h2" fontSize="140%">{title}</Heading>
            </Link>
            <Divider
              borderColor="#FFDE59"
              sx={{ marginBottom: '0.5em', marginTop: '0.5em' }}
            />

            {!isMobile && (
              <>
                <Box height="1em"></Box>
                <Box as="span" fontSize="90%">
                  <Text>{excerpt}</Text>
                </Box>
                <Box height="1em"></Box>
                <Divider
                  borderColor="#FFDE59"
                  sx={{ marginBottom: '0.25em', marginTop: '0.25em' }}
                />
              </>
            )}

            <Box height="1em"></Box>
            <Box fontSize="80%">
              <GatsbyLink to={slug}>{`${timeToRead} minute read`}</GatsbyLink>
            </Box>
          </Box>
        </Box>
        <Box>
          <>
            {featuredSrc !== '' && (
              <Center sx={{ height: '100%', width: '100%' }}>
                <Link as={GatsbyLink} to={slug}>
                  <AspectRatio width="112px" ratio={1 / 1}>
                    <FeaturedImage
                      alt={post.frontmatter.settings_featured_image.alt || ''}
                      filename={getRemoveLeadAndEndCharacter({
                        value: post.frontmatter.settings_featured_image.src,
                        character: { end: '/', lead: '/' },
                      })}
                    />
                  </AspectRatio>
                </Link>
              </Center>
            )}
          </>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogPostCard;
