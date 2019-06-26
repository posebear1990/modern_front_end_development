import React, { useState } from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Calendar from "../components/Calendar";
import List from "../components/List";

function Daily(props) {
  const [viewType, setViewType] = useState("calendar");

  const siteTitle = get(props, "data.site.siteMetadata.title");
  const dailys = get(props, "data.allMarkdownRemark.edges") || [];

  console.log(viewType);

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <Nav
        data={[
          {
            label: "日历视图",
            key: "calendar"
          },
          {
            label: "列表视图",
            key: "list"
          }
        ]}
        onClick={setViewType}
      />

      {viewType === "calendar" ? (
        <Calendar data={dailys} />
      ) : (
        <List data={dailys} />
      )}
    </Layout>
  );
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
