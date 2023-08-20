import React from "react";

function layout({ children }: any) {
  return (
    <>
      <div>layout</div>
      <div>{children}</div>
    </>
  );
}

export default layout;
