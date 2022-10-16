import React, { PureComponent } from "react";
import styles from "../../sass/ResponsiveContainer.module.sass";

class ResponsiveContainer extends PureComponent {
  render() {
    return (
      <div
        className={styles.containerFluid}
        style={
          this.props.hasOwnProperty("fluidContainerStyle")
            ? this.props.fluidContainerStyle
            : {}
        }
      >
        <div
          className={styles.container}
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
