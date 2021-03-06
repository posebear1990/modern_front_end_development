import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <Layout>
        <Helmet title={siteTitle} />
        {posts.map(post => {
          if (post.node.path !== "/404/") {
            const title = get(post, "node.frontmatter.title") || post.node.path;

            return (
              <div key={post.node.fields.slug}>
                <h3>
                  <Link to={post.node.fields.slug}>{title}</Link>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            );
          }
          return null;
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/post/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(format: PLAIN, pruneLength: 200, truncate: true)
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
