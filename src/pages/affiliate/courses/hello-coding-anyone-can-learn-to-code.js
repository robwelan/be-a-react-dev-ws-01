import React from 'react';
//  chakra-ui
import { Heading, Link, ListItem, UnorderedList, Text } from '@chakra-ui/react';
//  chakra-ui icons
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { helloCodingAnyoneCanLearnToCode } from '../../../constants/affiliate-marketing-digistore24/courses';

const LinkToThis = () => (
  <>
    <br />
    <Link
      href={helloCodingAnyoneCanLearnToCode.uri}
      rel="nofollow sponsored"
      target="_blank"
    >
      Get The Course Now! <ExternalLinkIcon mx="2px" />
    </Link>
    <br />
    <br />
  </>
);

const Page = () => {
  return (
    <>
      <Heading as="h1">Hello Coding - Anyone Can Learn to Code</Heading>
      <Text>
        Learn web development, Python, app development, machine learning, AI,
        Blockchain, Web3 and game development in this 550-HOUR bundle.
      </Text>

      <LinkToThis />

      <Heading as="h2">Everyone can learn to code!</Heading>
      <Text>
        Coding and technology mastery is the best way to launch your career,
        protect your job and superboost your success.
      </Text>

      <LinkToThis />

      <Heading as="h2">
        Go from A to B as quickly as possible with action-packed video lessons.
      </Heading>
      <UnorderedList>
        <ListItem>Build practical projects you can add to your resume</ListItem>
        <ListItem>
          Learn faster than anywhere else (we don't overteach theory)
        </ListItem>
        <ListItem>
          Get straight to the point with our crystal-clear tutorials
        </ListItem>
      </UnorderedList>

      <LinkToThis />

      <Heading as="h2">
        Join 5+ million students in high-quality courses featured at Harvard
      </Heading>
      <UnorderedList>
        <ListItem>
          Project-based curriculum to superboost your portfolio
        </ListItem>
        <ListItem>Graduation certificate for every course</ListItem>
        <ListItem>Absolute beginner-friendly</ListItem>
        <ListItem>Use any computer</ListItem>
        <ListItem>Satisfaction guarantee</ListItem>
        <ListItem>Get all source files</ListItem>
        <ListItem>Popular bundle by Mammoth students</ListItem>
        <ListItem>Perfected over years of training</ListItem>
        <ListItem>#1 training company</ListItem>
      </UnorderedList>

      <LinkToThis />

      <Heading as="h2">Why you should take this course</Heading>
      <UnorderedList>
        <ListItem>
          Employees that learn to code are 50% more likely to keep their job.
        </ListItem>
        <ListItem>20% more likely to get a promotion.</ListItem>
        <ListItem>
          You don't need a degree to learn to code. Over 50% of programmers are
          self-taught.
        </ListItem>
        <ListItem>
          More jobs in the future will require programming skills.
        </ListItem>
        <ListItem>
          Skills in one tech area are highly transferable to another tech area.
        </ListItem>
      </UnorderedList>

      <LinkToThis />

      <Heading as="h2">Get 7 streams:</Heading>
      <UnorderedList>
        <ListItem>Web Development</ListItem>
        <ListItem>Python Programming</ListItem>
        <ListItem>App Development</ListItem>
        <ListItem>Machine Learning</ListItem>
        <ListItem>Blockchain / Web3</ListItem>
        <ListItem>Game Development</ListItem>
        <ListItem>Interview Prep</ListItem>
      </UnorderedList>

      <LinkToThis />

      <Heading as="h2">What You Will Learn</Heading>
      <UnorderedList>
        <ListItem>React Interview Questions and Coding Challenges</ListItem>
        <ListItem>Backend Web Developer Interview Questions</ListItem>
        <ListItem>Essential Algorithms and Data Structures</ListItem>
        <ListItem>Essential JavaScript Software Interview Questions</ListItem>
        <ListItem>Python Interview Questions</ListItem>
        <ListItem>SQL Interview Questions</ListItem>
        <ListItem>Swift & iOS Interview Questions</ListItem>
        <ListItem>C++ and C# Data Structures, Algorithms</ListItem>
        <ListItem>Machine Learning Interview Questions</ListItem>
        <ListItem>Math Interview Questions with JavaScript</ListItem>
      </UnorderedList>

      <LinkToThis />

      <Text>
        Students are entitled to a full refund within 60 days of their initial
        payment.
      </Text>

      <Text>What have you got to lose? Nothing!</Text>

      <LinkToThis />
    </>
  );
};

export default Page;
