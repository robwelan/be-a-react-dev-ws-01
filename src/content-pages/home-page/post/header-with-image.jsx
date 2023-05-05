import React from 'react';
//  chakra-ui
import { Box, HStack } from '@chakra-ui/react';
//  gatsby
import { Link } from 'gatsby';
//  components
import FeaturedImage from '../../../components/feaured-image';
//  utiltities
import getRemoveLeadAndEndCharacter from '../../../utilities/strings/remove-lead-and-end-character';

const HeaderWithImage = (props) => {
  const { post, title } = props;

  return (
    <header>
      <HStack spacing={4}>
        <Box textAlign="left" marginBottom={4}>
          <FeaturedImage
            alt={post.frontmatter.settings_featured_image.alt || ''}
            filename={getRemoveLeadAndEndCharacter({
              value: post.frontmatter.settings_featured_image.src,
              character: { end: '/', lead: '/' },
            })}
            height="120px "
            width="213px"
          />
        </Box>
        <Box>
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{post.frontmatter.date}</small>
        </Box>
      </HStack>
    </header>
  );
};

export default HeaderWithImage;
