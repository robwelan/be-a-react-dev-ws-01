//  gatsby
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
//  lodash
import { find as _Find } from "lodash"

const useGetImage = payload => {
  const { image = "" } = payload
  const data = useStaticQuery(
    graphql`
      query allImageSharp {
        allImageSharp {
          edges {
            node {
              gatsbyImageData
              fluid {
                src
              }
              fixed {
                originalName
              }
            }
          }
        }
      }
    `
  )

  const imageNode = _Find(data.allImageSharp.edges, {
    node: { fixed: { originalName: image } },
  })

  const imageResult = getImage(imageNode.node.gatsbyImageData)

  return imageResult
}

export default useGetImage
