import React from "react";

function layout({ children }: any) {
  return (
    <div>
      layout
      <div>{children}</div>
    </div>
  );
}

export default layout;
