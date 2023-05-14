//  components
import CustomElement from './wrap-page-element';
import CustomRoot from './wrap-root-element';
// highlighting for code blocks
import 'prismjs/themes/prism.css';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer');
  }

  registerServiceWorker();
};

// export const onServiceWorkerUpdateReady = () => {};

export const registerServiceWorker = () => {
  if (typeof window !== 'undefined') {
    //  force refresh
    window.location.reload();
  }
};

export const wrapPageElement = CustomElement;

export const wrapRootElement = CustomRoot;
