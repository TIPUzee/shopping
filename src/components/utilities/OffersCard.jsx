import React, { PureComponent } from "react";

class OffersCard extends PureComponent {
  state = {};
  render() {
    const subCard = (onClickHandler, key) => {
      return (
        <div
          key={key}
          className={`${
            this.props.onOfferClickHandler.length === 3 ? "last:col-span-2" : ""
          } relative shadow-md shadow-slate-200 rounded-lg cursor-pointer  hover:shadow-lg  transition-shadow  after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-1/2 after:h-1/2 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center`}
          style={{
            aspectRatio: `${
              this.props.onOfferClickHandler.length === 3 && key === 3 - 1
                ? "2 / 1"
                : this.props.onOfferClickHandler.length === 2
                ? "1 / 2"
                : "1 / 1"
            }`,
          }}
          onClick={onClickHandler}
        >
          <img src="" alt="" className="rounded-inherit" />
        </div>
      );
    };

    console.log(this.props);
    return (
      <React.Fragment>
        <div className="bg-white rounded-2xl shadow-lg  hover:shadow-xl  transition-shadow  py-6 px-5 font-sans text-xl font-semibold tracking-wide flex flex-col gap-5 h-min">
          <div className="">{this.props.mainTitle}</div>
          {/* images wrapper */}
          <div
            className={`grid ${
              this.props.onOfferClickHandler.length >= 2
                ? "grid-cols-2"
                : "grid-cols-1"
            } ${
              this.props.onOfferClickHandler.length >= 3
                ? "grid-rows-2"
                : "grid-rows-1"
            } gap-4`}
          >
            {this.props.onOfferClickHandler.map((handler, i) => {
              return subCard(handler, i);
            })}
          </div>
          {/* images wrapper */}
          {/* bottom button */}
          <div className="grid place-items-end">
            <button
              className="text-sm px-3 py-2 rounded-lg bg-gray-800 text-gray-100 shadow-md shadow-slate-300  hover:bg-gray-700  transition-all"
              onClick={this.props.onButtonClickHandler}
            >
              Shop Now
            </button>
          </div>
          {/* bottom button */}
        </div>
      </React.Fragment>
    );
  }
}

export default OffersCard;
