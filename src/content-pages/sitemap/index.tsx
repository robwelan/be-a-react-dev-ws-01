import React from 'react';
//  chakra-ui
import { Heading, Link, List, ListItem, ListIcon } from '@chakra-ui/react';
//  constants
import pageIndex from './constants/pages-index';
//  gatsbyjs
import { Link as GatsbyLink } from 'gatsby';
//  styles
import './index.css';

const ContentSitemap = () => (
  <>
  <Heading as="h1" mb={4}>Sitemap</Heading>
  <List spacing={4}>
    {pageIndex.map((item) => {
      const {
        description,
        icon = undefined,
        id,
        indent = false,
        link = '',
        name,
      } = item;

      return (
        <ListItem key={id} className={indent ? 'indent' : ''}>
          <>
            {link === '' && (
              <>
                <Heading size={indent ? 'sm' : 'md'}>{name}</Heading>
                {icon && <ListIcon as={icon} />}
                {description && <>{description}</>}
              </>
            )}
            {link !== '' && (
              <Link as={GatsbyLink} to={link}>
                <Heading size={indent ? 'sm' : 'md'}>{name}</Heading>
                {icon && <ListIcon as={icon} />}
                {description && <>{description}</>}
              </Link>
            )}
          </>
        </ListItem>
      );
    })}
  </List></>
);

export default ContentSitemap;
