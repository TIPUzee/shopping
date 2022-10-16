import React, { createFactory, PureComponent } from "react";
import OffersCard from "./utilities/OffersCard";

class OffersHeader extends PureComponent {
  state = { res: null };
  render() {
    return (
      <React.Fragment>
        <div className="grid grid-cols-4 gap-3 min-h-screen">
          <OffersCard
            mainTitle="Gaming Accessories"
            onOfferClickHandler={[
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
            ]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
          ></OffersCard>
          <OffersCard
            mainTitle="Health & Personal Care"
            onOfferClickHandler={[
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
            ]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
          ></OffersCard>
          <OffersCard
            mainTitle="Dress"
            onOfferClickHandler={[
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
            ]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
          ></OffersCard>
          <OffersCard
            mainTitle="Toys under $30"
            onOfferClickHandler={[this.props.handlerForDialogueBoxToShow]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
          ></OffersCard>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_LOCALHOST + "offersDetails.php")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ res: res });
      });
  };
}

export default OffersHeader;
