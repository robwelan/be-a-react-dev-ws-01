import React, { ElementType } from 'react';

type TypePageLink = {
  description: string;
  icon: ElementType;
  name: string;
  route: string;
};

type TypePageLinks = Array<TypePageLink>;

export { TypePageLink, TypePageLinks };
