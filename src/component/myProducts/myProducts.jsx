import { render } from "@testing-library/react";
import React from "react";
import Header from "../Home-page/vendors";

 class myProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default myProducts;
