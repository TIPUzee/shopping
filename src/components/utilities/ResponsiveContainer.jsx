import React, { PureComponent } from "react";

class ResponsiveContainer extends PureComponent {
  render() {
    return (
      <div
        className="w-full"
        style={
          this.props.hasOwnProperty("fluidContainerStyle")
            ? this.props.fluidContainerStyle
            : {}
        }
      >
        <div
          className="container mx-auto"
          style={
            this.props.hasOwnProperty("containerStyle")
              ? this.props.containerStyle
              : {}
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ResponsiveContainer;
