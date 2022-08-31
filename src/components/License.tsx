import React from "react";

const License: React.FC<{ [x: string]: any }> = ({ ...rest }) => {
  return (
    <a
      rel="license"
      href="http://creativecommons.org/licenses/by-sa/4.0/"
      {...rest}
    >
      <img
        alt="Creative Commons License"
        style={{ borderWidth: 0 }}
        src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
      />
    </a>
  );
};

export default License;
