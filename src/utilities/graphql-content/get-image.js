//  gatsby plugin image
import { getImage } from 'gatsby-plugin-image';
//  lodash
import { find as _Find } from 'lodash';
//  local utilities
import getRemoveLeadAndEndCharacter from '../strings/remove-lead-and-end-character';

const getImageFromGraphQlContent = (payload) => {
  const { images = [], image = {} } = payload;
  const { alt = '', src = '', title = '' } = image;
  const defaultAlt = 'be a react dev';
  const defaultImage = 'be-a-react-dev-1080p.png';
  const defaultTitle = 'Be A React Dev';

  try {
    let imageResult;

    if (src === '') {
      const imageNode = _Find(images, {
        node: { fixed: { originalName: defaultImage } },
      });
      imageResult = getImage(imageNode.node.gatsbyImageData);
    }

    if (src !== '') {
      const filename = getRemoveLeadAndEndCharacter({
        value: src,
        character: { end: '/', lead: '/' },
      });

      const imageNode = _Find(images, {
        node: { fixed: { originalName: filename } },
      });

      imageResult = getImage(imageNode.node.gatsbyImageData);
    }

    return {
      alt: src === '' ? defaultAlt : alt,
      image: imageResult,
      title: title === '' ? defaultTitle : title,
      success: true,
    };
  } catch (error) {
    const imageNode = _Find(images, {
      node: { fixed: { originalName: defaultImage } },
    });

    const imageResult = getImage(imageNode.node.gatsbyImageData);

    return {
      alt: defaultAlt,
      image: imageResult,
      title: defaultTitle,
      success: false,
    };
  }
};

export default getImageFromGraphQlContent;
