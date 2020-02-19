import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query{
        avatarImage: file(relativePath: {eq: "fotoprofissional.jpg"}) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return <Img fixed={avatarImage.childImageSharp.fixed}/>
}

export default Avatar
