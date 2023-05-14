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
};

export const onServiceWorkerUpdateReady = () => {
  // const answer = window.confirm(
  //   `This application has been updated. ` +
  //     `Reload to display the latest version?`
  // )
  // if (answer === true) {
  //   window.location.reload()
  // }
  //  force refresh
  window.location.reload();
};

export const registerServiceWorker = () => true;

export const wrapPageElement = CustomElement;

export const wrapRootElement = CustomRoot;
