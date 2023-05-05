import React from 'react';
//  chakra-ui
//  gatsby
import { Link } from 'gatsby';

const HeaderSansImage = (props) => {
  const { post, title } = props;

  return (
    <header>
      <h2>
        <Link to={post.fields.slug} itemProp="url">
          <span itemProp="headline">{title}</span>
        </Link>
      </h2>
      <small>{post.frontmatter.date}</small>
    </header>
  );
};

export default HeaderSansImage;
