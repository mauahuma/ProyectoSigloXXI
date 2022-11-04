import React from "react";
import { Button } from "semantic-ui-react";
import "./HeaderPage.scss";

export function HeaderPage(props) {
  const { title, btnTitle, btnClick, btnTitle2, btnClick2 } = props;
  return (
    <div className="header-page-worker">
      <h2>{title}</h2>

      <div>
        {btnTitle && (
          <Button positive onClick={btnClick}>
            {btnTitle}
          </Button>
        )}
        {btnTitle2 && (
          <Button negative onClick={btnClick2}>
            {btnTitle2}
          </Button>
        )}
      </div>
    </div>
  );
}
