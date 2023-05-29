/*
  from here
  https://github.com/chakra-ui/chakra-ui-docs/discussions/469
*/
import React from 'react';
import type { As } from '@chakra-ui/react';
import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as GatsbyLink } from 'gatsby';
import type {
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser';
import parse, { domToReact } from 'html-react-parser';

/**
 * !!! IMPORTANT !!!
 * Don't wrap this in a Text component otherwise it can break the whole page. No Paragraphs in a Paragraph
 * @param plainHtml The HTML string to parse
 * @returns React.Nodes that can be put into a page
 */
export const asComponent = (plainHtml: string) => {
  return <>{parse(plainHtml, options)}</>;
};

function isParsedElement(domNode: DOMNode | Element): domNode is Element {
  return domNode.constructor.name === 'Element' || domNode.type === 'tag';
}

const toCamelCase = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase());

const styleStringAsObject = (style: string) => {
  const noWhitespaces = style.replace(/\s+/g, '');
  const attributes = noWhitespaces.split(';');

  return Object.fromEntries(
    attributes.map((attribute) => {
      const entry = attribute.split(/:(.+)/); // TODO refactor adds an unneccesary empty element at the end hence the filter on value
      const key = entry.splice(0, 1)[0];
      const value = entry.filter((e) => e !== '').join(':');
      return [key, value];
    }),
  );
};

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (isParsedElement(domNode)) {
      const children = domNode.children;
      const tagName = domNode.name;

      const safeAttribs: { [key: string]: string | object | number } = {};
      for (const [key, value] of Object.entries(domNode.attribs)) {
        const safeKey = toCamelCase(key);
        switch (safeKey) {
          case 'style':
            safeAttribs[safeKey] = styleStringAsObject(value);
            break;
          case 'tabindex':
            safeAttribs.tabIndex = Number(value);
            break;
          default:
            safeAttribs[safeKey] = value;
        }
      }

      const reHeading = /(h[1-6])/g;
      if (tagName.match(reHeading)) {
        const heading: As = tagName as As;
        return (
          <Heading
            as={heading}
            // marginLeft="auto"
            // marginRight="auto"
            // pb={['8px', '20px']}
            // pt={['20px', '40px']}
            // lineHeight={1}
            {...safeAttribs}
            marginTop="1em"
            size="sm"
          >
            {domToReact(children, options)}
          </Heading>
        );
      }
      switch (tagName) {
        case 'a': {
          return (
            <Link {...safeAttribs}>
              {domToReact(children, options)}
              {safeAttribs.target === '_blank' ? ' ' : ''}
              {safeAttribs.target === '_blank' ? <ExternalLinkIcon /> : null}
            </Link>
          );
        }
        case 'ul': {
          return (
            <UnorderedList lineHeight="2rem" {...safeAttribs}>
              {domToReact(children, options)}
            </UnorderedList>
          );
        }
        case 'ol': {
          return (
            <OrderedList lineHeight="2rem" {...safeAttribs}>
              {domToReact(children, options)}
            </OrderedList>
          );
        }
        case 'li': {
          return (
            <ListItem {...safeAttribs}>
              {domToReact(children, options)}
            </ListItem>
          );
        }
        case 'p': {
          return (
            <Text {...safeAttribs} sx={{ marginBottom: '0.5em' }}>
              {domToReact(children, options)}
            </Text>
          );
        }
        // No special parsing needed, just style the blockquote in the theme config
        // case 'blockquote': {
        //   return (
        //     <Box
        //       as="blockquote"
        //       paddingLeft="20px"
        //       borderLeft="3px solid"
        //       borderColor="accent.500"
        //       {...safeAttribs}
        //     >{domToReact(children, options)}
        //     </Box>
        //   )
        // }
      }
    }
  },
};
