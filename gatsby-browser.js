// import * as ReactDOM from 'react-dom/client';
//  components
import CustomPage from './wrap-page-element';
import CustomRoot from './wrap-root-element';
// highlighting for code blocks
import 'prismjs/themes/prism.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer');
  }
};

// export const replaceHydrateFunction = () => {
//   return (element, container) => {
//     const root = ReactDOM.createRoot(container);
//     root.render(element);
//   };
// };

export const wrapPageElement = CustomPage;
export const wrapRootElement = CustomRoot;
