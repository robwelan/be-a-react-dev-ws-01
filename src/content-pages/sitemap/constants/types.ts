//  react icons
import { IconType } from 'react-icons';

export type TypePageIndexItem = {
  description?: string;
  icon?: IconType;
  id: string;
  indent?: Boolean;
  link: string;
  name: string;
};

export type TypePageIndex = Array<TypePageIndexItem>;
