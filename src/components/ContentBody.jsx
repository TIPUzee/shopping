import React, { PureComponent } from "react";
import DialogueBox from "./DialogueBox";
import HeroCarousel from "./HeroCarousel";
import OffersContainer from "./OffersContainer";

class ContentBody extends PureComponent {
  state = {
    dialogueBoxShow: false,
  };
  render() {
    return (
      <React.Fragment>
        <HeroCarousel />
        <OffersContainer
          handlerForDialogueBoxToShow={this.handleDialoguBoxToShow}
        />
        <div
          className=""
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: "99999",
          }}
        >
          {}
        </div>
        <DialogueBox
          show={this.state.dialogueBoxShow}
          closeHandle={this.handleDialogueBoxToHide}
        />
      </React.Fragment>
    );
  }

  handleDialoguBoxToShow = () => {
    this.setState({ dialogueBoxShow: true });
  };

  handleDialogueBoxToHide = () => {
    this.setState({ dialogueBoxShow: false });
  };
}

export default ContentBody;
