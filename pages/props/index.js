import React from "react";
import Nav from "../components/nav";

export default function Index() {
  return (
    <div>
      <Nav
        // name={"Test"}
        age={15}
        data={[
          { id: 1, tim: "CDS" },
          { id: 2, tim: "HRD" },
        ]}
      />
    </div>
  );
}
