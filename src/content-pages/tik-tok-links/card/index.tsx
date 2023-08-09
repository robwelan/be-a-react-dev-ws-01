import React from 'react';
//  chakra-ui
import {
  Avatar,
  Box,
  Button,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
//  react-icons
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
//  images
import header from '../../../images/tik-tok-links/header.jpg';
import logo from '../../../images/beareactdev_icon.svg';
import KoFi from '../../../images/third-party-icons/kofi-icon';

const CardForTikTok = () => {
  return (
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
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardForTikTok;
