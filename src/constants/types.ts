import { ReactNode } from 'react';

type Children = null | string | ReactNode;

type Location = {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  key: string;
  origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  state: {
    key: string;
  };
};


export { Children, Location };
