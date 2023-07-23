/*
https://github.com/gatsbyjs/gatsby/discussions/36232

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};

and make sure to import the reactDom

import ReactDOM from "react-dom/client";
*/

import * as ReactDOM from 'react-dom/client';

const browserHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};

export default browserHydrateFunction;
