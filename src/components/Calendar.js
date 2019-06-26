import React from "react";
import { navigateTo } from "gatsby";
import SimpleCalendar from "@react-simple-component/calendar";
import "@react-simple-component/calendar/lib/index.css";
import get from "lodash/get";
import "./Calendar.css";

export default function Calendar({ data }) {
  return (
    <SimpleCalendar
      list={data.map(post => {
        return {
          alt: get(post, "node.frontmatter.title"),
          className: "active",
          time: new Date(get(post, "node.frontmatter.date")).valueOf(),
          path: get(post, "node.fields.slug")
        };
      })}
      now={new Date().valueOf()}
      onClick={(date, item) => {
        item.path && navigateTo(item.path);
      }}
    />
  );
}
