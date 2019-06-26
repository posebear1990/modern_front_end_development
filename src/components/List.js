import React from "react";
import get from "lodash/get";
import { Link } from "gatsby";

export default function List({ data }) {
  return (
    <div>
      {data.map(post => {
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
    </div>
  );
}
