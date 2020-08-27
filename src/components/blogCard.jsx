import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CardWrapper = styled(props => <Link {...props} />)`
  background-color: white;
  height: 50px;
`

const Card = styled.div`
  background-color: white;
  height: 50px;
`

const BlogCard = ({ id, title, path }) => {
  console.log(title)
  return (
    <CardWrapper to={path} id={id}>
      <Card>{title}</Card>
    </CardWrapper>
  )
}

export default BlogCard
