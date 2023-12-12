//  components
import CustomPage from './wrap-page-element';
import CustomRoot from './wrap-root-element';
// highlighting for code blocks
import 'prismjs/themes/prism.css';
//  TODO: remove browserHydrateFunction when you are confident
//  utilities
// import browserHydrateFunction from './src/utilities/gatsby/browser-hydrate-function';
// styles
import './src/content-layout/css/site.css';
import './src/content-layout/css/floating-label.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer');
  }
};

// export const replaceHydrateFunction = browserHydrateFunction;
export const wrapPageElement = CustomPage;
export const wrapRootElement = CustomRoot;
