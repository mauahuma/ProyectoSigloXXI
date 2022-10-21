import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export function SideA(props) {
  const { Visible } = props;
  return (
    <div className="Side-A">
      <Menu borderless inverted fixed="botom">
        <Menu.Item as="a" position="right">
          <Icon name="file alternate outline" size="big"></Icon>
        </Menu.Item>
      </Menu>
    </div>
  );
}
