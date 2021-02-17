/* eslint-disable no-debugger */
import React from "react";

import "./loader.styles.scss";

const Loader = ({ onLoader, children }) => {
  if (!onLoader) {
    return (
      <div className="loader">
        <img
          src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-28.jpg"
          alt="loader"
        />
      </div>
    );
  }
  return <>{children}</>;
};

export default Loader;
