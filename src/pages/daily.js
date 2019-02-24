import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/layout";

class Daily extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const dailys = get(this, "props.data.allMarkdownRemark.edges") || [];

    return (
      <Layout>
        <Helmet title={siteTitle} />
        {dailys.map(post => {
          if (post.node.path !== "/404/") {
            const title = get(post, "node.frontmatter.title");
            return (
              <div key={post.node.fields.slug}>
                <h3>
                  <Link to={post.node.fields.slug}>{title}</Link>
                </h3>
                <small>{post.node.frontmatter.date}</small>
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

export default Daily;

export const pageQuery = graphql`
  query DailyQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/daily/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
