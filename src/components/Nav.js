import React, { useState } from "react";
import _ from "lodash";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  color: #00a0ad;

  ${props =>
    props.active &&
    css`
      color: #000;
    `}
`;

function Nav({ data = [], onClick = null, children }) {
  const [activeKey, setActiveKeyKey] = useState(_.get(data, [0, "key"]));

  return (
    <div className="simple-nav">
      {data.map((item, i) => {
        return [
          <Button
            active={activeKey === item.key}
            onClick={() => {
              setActiveKeyKey(item.key);
              onClick && onClick(item.key);
            }}
            key={item.key}>
            {item.label}
          </Button>,
          i !== data.length - 1 && "|"
        ];
      })}
    </div>
  );
}

export default Nav;
