import React, { ElementType } from 'react';
//  chakra-ui
import { Link, ListItem, ListIcon } from '@chakra-ui/react';
//  gatsby
import { Link as GatsbyLink } from 'gatsby';

type Props = {
  icon?: ElementType;
  label: string;
  route: string;
};

const ListItemWithLink = (props: Props) => {
  const { icon, label, route } = props;

  return (
    <ListItem>
      <Link as={GatsbyLink} to={route}>
        {icon && <ListIcon as={icon} />}
        {label}
      </Link>
    </ListItem>
  );
};

export default ListItemWithLink;
