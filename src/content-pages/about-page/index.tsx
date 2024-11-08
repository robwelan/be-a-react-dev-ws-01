import React from 'react';
//  chakra-ui
import {
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
//  chakra-ui icons
import { ExternalLinkIcon } from '@chakra-ui/icons';
//  react icons
import { MdDeveloperMode } from '@react-icons/all-files/md/MdDeveloperMode';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';
import { SiReact } from '@react-icons/all-files/si/SiReact';
//  components
import Feature from './feature';
import MyCodePens from './my-codepens';
import MyProjects from './my-projects';
//  hooks
import useSiteMetadata from '../../hooks/use-site-meta-data';
//  profile image
import profileImage from '../../images/rob_welan_20240215.jpg';

const SplitWithImage = () => {
  const siteMetadata = useSiteMetadata();

  const author = siteMetadata?.author;
  const social = siteMetadata?.social;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading as="h1" fontSize="135%"  sx={{ width: '100%' }}>
            <Feature
              icon={
                <Icon as={MdDeveloperMode} color={'green.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={{ color: '', value: `About ${author.name}` }}
            />
          </Heading>
          <Text color="gray.500" fontSize="110%">
            I am a developer who has worked predominantly in two languages:
            Visual Basic and JavaScript. And some PHP. Please don't make me use
            PHP.
          </Text>
          <Text>
            I have built a number of websites and applications across the years.
            Many have been for IBM internally and for IBM’s customers.
          </Text>
          <Text>
            These days my customers are mainly me, friends, and family.
          </Text>
          <Text>Technology I am using now:</Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={<Icon as={SiJavascript} color={'#F7DF1E'} w={5} h={5} />}
              iconBg={useColorModeValue('green.900', 'blackAlpha.900')}
              text={{ color: '', value: 'JavaScript' }}
            />
            <Feature
              icon={<Icon as={SiGatsby} color={'#663399'} w={5} h={5} />}
              iconBg={useColorModeValue('orange.200', 'orange.300')}
              text={{ color: '', value: 'Gatsby' }}
            />
            <Feature
              icon={<Icon as={SiReact} color={'#5ED3F3'} w={5} h={5} />}
              iconBg={useColorModeValue('pink.700', 'pink.900')}
              text={{ color: '', value: 'ReactJS' }}
            />
          </Stack>
          <Text>
            I have been using the above technology in the hopes I might gain
            full time employment with these technologies. I have been
            unsuccessful to date in this pursuit to find full time work. I do
            have projects though which are deployed.
          </Text>
          <br />
          <Heading as="h2" fontSize="125%" sx={{ width: '100%' }}>
            Why Gatsby?
          </Heading>
          <Text>
            It’s pretty easy to use. Kind of. The documentation leaves a lot to
            be desired. This blog has an intention of providing useful and clear
            code to fill gaps in the official documentation.
          </Text>
          <Text>
            You should connect with me on{' '}
            <Link
              href={`https://www.linkedin.com/in/${social?.linkedin || ``}${
                social?.linkedin !== '' ? '/' : ``
              }`}
              isExternal
            >
              LinkedIn <ExternalLinkIcon />
            </Link>
          </Text>
          <Text>
            You should follow me on{' '}
            <Link
              href={`https://twitter.com/${social?.twitter || ``}`}
              isExternal
            >
              Twitter <ExternalLinkIcon />
            </Link>
          </Text>
          <Text>
            You can subscribe to exclusive content on{' '}
            <Link href="https://patreon.com/BeAReactDev" isExternal>
              Patreon <ExternalLinkIcon />
            </Link>
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={author.name}
            src={profileImage}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>

      <MyProjects />
      <MyCodePens />
    </>
  );
};

export default SplitWithImage;
