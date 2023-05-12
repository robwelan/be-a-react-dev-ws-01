import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            description
            icon
            keywords
            siteUrl
            title
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
