import React from "react";

import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div className="wrapper">
          <div>
              <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          </div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </div>
    );
  }
}
