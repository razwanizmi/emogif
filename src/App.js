import React, { Component } from "react";
import { toEmoji } from "./helpers/emoji";

class App extends Component {
  render() {
    return <div>{toEmoji("a")}</div>;
  }
}

export default App;
