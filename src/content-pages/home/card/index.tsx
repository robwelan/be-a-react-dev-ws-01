import React, { ElementType } from 'react';
//  chakra-ui
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
} from '@chakra-ui/react';
import { TypePageLinks } from '../../../constants/page-links/types';
//  local components
import CardListItem from '../list-item';

type ContentCardProps = {
  icon?: ElementType;
  name: string;
  list: TypePageLinks;
};

const ContentCard = (props: ContentCardProps) => {
  const { icon, name, list } = props;

  return (
    <Card>
      <CardHeader>
        <HStack>
          {icon && (
            <Icon
              as={icon}
              boxSize={8}
              fontSize="12"
              mr="4"
              _groupHover={{
                color: 'white',
              }}
            />
          )}
          <Heading size="lg">{name}</Heading>
        </HStack>
      </CardHeader>
      <CardBody>
        <List spacing={4}>
          {list &&
            list.map((item, index) => (
              <ListItem key={index}>
                {index > 0 && <Divider />}
                <CardListItem
                  description={item.description}
                  icon={item.icon}
                  name={item.name}
                  route={item.route}
                />
              </ListItem>
            ))}
        </List>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ContentCard;
