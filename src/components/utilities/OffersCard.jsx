import React, { PureComponent } from "react";

class OffersCard extends PureComponent {
  width = {
    1: {
      0: "w-full",
    },
    2: {
      0: "w-[47.5%]",
      1: "w-[47.5%]",
    },
    3: {
      0: "w-[47.5%]",
      1: "w-[47.5%]",
      2: "w-full",
    },
    4: {
      0: "w-[47.5%]",
      1: "w-[47.5%]",
      2: "w-[47.5%]",
      3: "w-[47.5%]",
    },
  };

  state = {};
  render() {
    const subCard = (onClickHandler, key) => {
      return (
        <div
          key={key}
          className={
            "shrink-0 relative shadow-md shadow-slate-200 rounded-lg cursor-pointer  hover:shadow-lg  transition-shadow  after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center" +
            " " +
            this.width[this.props.onOfferClickHandler.length][key]
          }
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
        <div className="xl:w-[23%] lg:w-[27%] md:w-[31%] h-[27rem] gap-2 shrink-0 bg-white rounded-2xl shadow-lg  hover:shadow-xl  transition-shadow  py-6 px-7 font-sans text-xl font-semibold tracking-wide flex flex-col justify-between">
          <div className="">{this.props.mainTitle}</div>
          {/* images wrapper */}
          <div className={`flex flex-wrap justify-between`}>
            {this.props.onOfferClickHandler.map((handler, i) => {
              return subCard(handler, i);
            })}
          </div>
          {/* images wrapper */}
          {/* bottom button */}
          <div className="grid place-items-end">
            <button
              className="text-sm px-3 py-2 rounded-lg bg-gray-700 text-gray-100 shadow-sm shadow-slate-200  hover:bg-gray-800 hover:shadow-slate-300 hover:shadow-md  transition-all"
              onClick={this.props.onButtonClickHandler}
            >
              {this.props.bottomButtonTitle}
            </button>
          </div>
          {/* bottom button */}
        </div>
      </React.Fragment>
    );
  }
}

export default OffersCard;
