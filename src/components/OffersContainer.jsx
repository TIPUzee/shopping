import React, { PureComponent } from "react";
import { ResponsiveContainer } from "./utilities";
import "../css/tailwind.css";
import OffersHeader from "./OffersHeader";

class OffersContainer extends PureComponent {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ResponsiveContainer
          fluidContainerStyle={{
            marginTop: "-50px",
            position: "relative",
            zIndex: "10",
          }}
          containerStyle={{ paddingInline: "30px" }}
        >
          {/* wrapper */}
          <div className="">
            <OffersHeader
              handlerForDialogueBoxToShow={
                this.props.handlerForDialogueBoxToShow
              }
            />
          </div>
          {/* wrapper */}
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

export default OffersContainer;
