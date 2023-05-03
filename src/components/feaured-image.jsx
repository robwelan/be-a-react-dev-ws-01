import React from "react"
//  gatsby-plugin-image
import { GatsbyImage } from "gatsby-plugin-image"
//  hooks
import useGetImage from "../hooks/use-get-image"

const FeaturedImage = props => {
  const { alt = "", filename = "", height = "100%", width = "100%" } = props
  const image = useGetImage({ image: filename })

  return (
    <GatsbyImage
      alt={alt}
      image={{ ...image, height, width }}
      height={height}
    />
  )
}

export default FeaturedImage
