import React, { createFactory, PureComponent } from "react";
import OffersCard from "./utilities/OffersCard";

class OffersHeader extends PureComponent {
  state = { res: null };
  render() {
    return (
      <React.Fragment>
        <div className="flex flex-wrap xl:justify-between lg:justify-evenly md:justify-between gap-y-8">
          <OffersCard
            mainTitle="Gaming Accessories"
            onOfferClickHandler={[
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
            ]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Shop Now"}
          ></OffersCard>
          <OffersCard
            mainTitle="Health & Personal Care"
            onOfferClickHandler={[
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
            ]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Shop Now"}
          ></OffersCard>
          <OffersCard
            mainTitle="Dress"
            onOfferClickHandler={[
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
              this.props.handlerForDialogueBoxToShow,
            ]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Shop Now"}
          ></OffersCard>
          <OffersCard
            mainTitle="Toys under $30"
            onOfferClickHandler={[this.props.handlerForDialogueBoxToShow]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Shop Now"}
          ></OffersCard>
          <OffersCard
            mainTitle="Shop by Catagory"
            onOfferClickHandler={[this.props.handlerForDialogueBoxToShow]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Shop Now"}
          ></OffersCard>
          <OffersCard
            mainTitle="Computer & Accessories"
            onOfferClickHandler={[this.props.handlerForDialogueBoxToShow]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Shop Now"}
          ></OffersCard>
          <OffersCard
            mainTitle="Easy Returns"
            onOfferClickHandler={[this.props.handlerForDialogueBoxToShow]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Learn More"}
          ></OffersCard>
          <OffersCard
            mainTitle="Best Quality"
            onOfferClickHandler={[this.props.handlerForDialogueBoxToShow]}
            onButtonClickHandler={this.props.handlerForDialogueBoxToShow}
            bottomButtonTitle={"Learn More"}
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
