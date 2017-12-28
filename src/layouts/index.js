import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px 0;
  text-shadow: -1px -1px 0.5px #095053, 1px 1px 0.5px #095053,  -1px 0px 6px #ccc, 1px 0px 6px #ccc, 0px 1px 6px #ccc, 0px -1px 6px #ccc;
  letter-spacing: -2px;
  
  a {
    text-decoration: none;
    box-shadow: none;
    color: #4ff6ef;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 90%;
  height: 100%;
  min-height: 900px;
  background: #fff;
  border-radius: 5px;
  border: 6px solid #4ff6ef;
  padding: 20px;
`

class Template extends React.Component {
  render() {
    const { children, data} = this.props

    return (
      <div>
        <Title>
          <Link to={'/'} >
            {data && data.site.siteMetadata.title}
          </Link>
        </Title>
        <Wrapper>
          {children()}
        </Wrapper>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`