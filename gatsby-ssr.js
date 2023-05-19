//  Components
import CustomPage from './wrap-page-element';
import CustomRoot from './wrap-root-element';

export const wrapPageElement = CustomPage;
export const wrapRootElement = CustomRoot;

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};
