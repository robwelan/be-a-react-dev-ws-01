---
title: Build a Tik Tok Bio in chakra-ui for React
date: "2023-08-09T17:37:00Z"
categories:
  - content, typescript
meta_keywords:
  - typescript, content
meta_description: >-
  This is a basic tutorial on making a Tik Tok Bio page - presumably on your own personal web site. Which would need to be Gatsby to be just like me. But does not need to be. Really.
settings_include_in_fti: true
settings_featured_image:
  alt: >-
    react plus typescript
  src: /typescript-plus-react.png
  title: Build a Tik Tok Bio in chakra-ui for React
settings_publish: true
twitter_tags:
  - "#react"
  - "#tiktok"
  - "#typescript"
---

## What you will be building

Please check this link: <a href="https://beareact.dev/tik-tok-bio/" target="_blank">Tik Tok Bio</a>

This app uses components from <a href="https://chakra-ui.com/" rel="noopener" target="_blank">Chakra UI</a>. You should check it out.

## What you will need in your Gatsby set up

Make sure you have a page called tik-tok-bio.js (or extension ts if you prefer) in your pages directory.

Make sure you have a folder called content-pages and within that a folder called tik-tok-bio.

## src/pages/tik-tok-bio.js

```language-typescript
import React from 'react';
//  components
import Seo from '../components/seo';
//  content
import ContentTikTokBio from '../content-pages/tik-tok-bio';

const PageTikTokBio = ({ location }) => (
  <ContentTikTokBio location={location} />
);

export default PageTikTokBio;

export const Head = ({ location }) => (
  <Seo location={location} title="Tik Tok Bio" />
);
```

### How The Page Works

Inside the page is an instance of React as usual. Next we import an Seo component (mine is built on <a href="https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/" target="_blank">Gastsby Head</a>).

After these we import the Content itself and then define the function which returns the Content.

Finally the file exports the Page and the Head (the Head uses the Seo component).


Now we get to talk about the content.

## src/content-pages/tik-tok-bio/index.tsx

```language-typescript
import React from 'react';
import { Center } from '@chakra-ui/react';
//  local components
import CardForTikTok from './card';

const TikTokBio = () => (
  <Center p={4}>
    <CardForTikTok />
  </Center>
);

export default TikTokBio;
```

### How The Content Works

The index file is nice and simple. All that is required is an instance of React, the Center component from chakra-ui, and the local component which is the card content.

Then the function is defined which simply returns the content. There are no interactions with props so the file is pretty simple.

## src/content-pages/tik-tok-bio/card/index.tsx

```language-typescript
import React from 'react';
//  chakra-ui
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
//  chakra-ui icons
import { ExternalLinkIcon } from '@chakra-ui/icons';
//  react-icons
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
//  images
import header from '../../../images/tik-tok-links/header.jpg';
import logo from '../../../images/beareactdev_icon.svg';
import KoFi from '../../../images/third-party-icons/kofi-icon';

const CardForTikTok = () => (
  <Card maxW="sm" boxShadow={'2xl'}>
    <CardHeader padding={0}>
      <Image
        borderTopRadius="md"
        h={'120px'}
        w={'full'}
        src={header}
        objectFit="cover"
        alt=""
      />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={logo}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>
    </CardHeader>

    <CardBody>
      <Flex direction="column" gap={4}>
        <Button
          as={Link}
          href="https://www.facebook.com/rmw.its/"
          isExternal
          variant="outline"
          leftIcon={<FaFacebook />}
          rightIcon={<ExternalLinkIcon />}
          size="md"
        >
          Follow me on facebook
        </Button>

        <Button
          as={Link}
          href="https://ko-fi.com/beareactdev"
          isExternal
          variant="outline"
          leftIcon={<KoFi />}
          rightIcon={<ExternalLinkIcon />}
          size="md"
        >
          Support me on Ko-fi
        </Button>

        <Button
          as={Link}
          href="https://www.linkedin.com/in/robwelan/"
          isExternal
          variant="outline"
          leftIcon={<FaLinkedin />}
          rightIcon={<ExternalLinkIcon />}
          size="md"
        >
          Connect with me on linkedin
        </Button>

        <Button
          as={Link}
          href="https://medium.com/@rmw.its"
          isExternal
          variant="outline"
          leftIcon={<FaMedium />}
          rightIcon={<ExternalLinkIcon />}
          size="md"
        >
          Read Me on Medium
        </Button>

        <Button
          as={Link}
          href="https://www.patreon.com/BeAReactDev"
          isExternal
          variant="outline"
          leftIcon={<FaLinkedin />}
          rightIcon={<ExternalLinkIcon />}
          size="md"
        >
          Support me on patreon
        </Button>

        <Button
          as={Link}
          href="https://twitter.com/rmwits"
          isExternal
          variant="outline"
          leftIcon={<FaTwitter />}
          rightIcon={<ExternalLinkIcon />}
          size="md"
        >
          Follow me on twitter (X)
        </Button>
      </Flex>
    </CardBody>
    <CardFooter>
      <Text align="center" width="100%">
        Thank you for your support
        <br />
        and kind interest!
      </Text>
    </CardFooter>
  </Card>
);

export default CardForTikTok;
```

### How The Card Code Works

This one is a little more complicated. The sections could be split out also into smaller components, and I could have made the buttons into an array of objects and mapped out the array. But I chose not to. Instead it is one long file. It is long enough though to warrant splitting out into smaller and therefore more manageable files. Like with the ideas I just mentioned. I might do this as a later exercise.

### And so the imports

So the usual suspects. We need React, a bunch of things from chakra-ui, some react-icons and some local images including a custom icon which I will have to document on another day.

Within the defined function that follows the import is the Card wrapper with a couple of basic props defined.

After that comes the CardHeader with the required images (the header and the logo).

And then after that is the CardBody which contains a Flex wrapper for the buttons.

A typical button looks like this:

```language-typescript
  <Button
    as={Link}
    href="https://twitter.com/rmwits"
    isExternal
    variant="outline"
    leftIcon={<FaTwitter />}
    rightIcon={<ExternalLinkIcon />}
    size="md"
  >
    Follow me on twitter (X)
  </Button>
```

You can see that each button is basically the same and an excellent candidate for creating a simple reusable component that accepts a uri and content plus icons for example. What else do you think it should accept?

And lastly I have used the CardFooter component to include a nice thank you.

And that would be that I guess.

Ta da!
