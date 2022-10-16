import React, { PureComponent } from "react";
import { ResponsiveContainer } from "./utilities";
import "../css/tailwind.css";
import OffersHeader from "./OffersHeader";
import SliderOffers from "./SliderOffers";

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
          <div className="offers-wrapper flex flex-col gap-12">
            <OffersHeader
              handlerForDialogueBoxToShow={
                this.props.handlerForDialogueBoxToShow
              }
            />
            <SliderOffers />
          </div>
          {/* wrapper */}
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

export default OffersContainer;
