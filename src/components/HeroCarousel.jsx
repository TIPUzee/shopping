import React, { Component } from "react";
import ResponsiveContainer from "./utilities/ResponsiveContainer";
import { Carousel } from "react-responsive-carousel";
import styles from "../sass/HeroCarousel.module.sass";
import { ImgPlaceholder } from "./utilities";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContentPasteOffSharp } from "@mui/icons-material";

class HeroCarousel extends Component {
  slidesList = [];
  state = {
    imgs: false,
    loaded: [],
    anyLoaded: false,
  };

  updateSlidesList = () => {
    if (!this.state.anyLoaded) {
      return null;
    }
    this.slidesList = [];
    console.log("loaded", this.state.loaded);
    this.state.loaded.forEach((element, i) => {
      if (element === true) {
        this.slidesList.push(this.state.imgs[i]);
      }
    });

    return null;
  };

  render() {
    return (
      <>
        <ResponsiveContainer fluidContainerStyle={{}}>
          {this.state.anyLoaded ? (
            <React.Fragment>
              {this.updateSlidesList()}
              <Carousel
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop
                interval={12000}
              >
                {this.slidesList.map((img, i) => {
                  return (
                    <div className={styles.item} key={i}>
                      <img
                        src={process.env.REACT_APP_LOCALHOST + img.src}
                        alt={img.title}
                        className={styles.bg}
                      />
                      <p className={styles.header}>{img.header}</p>
                    </div>
                  );
                })}
              </Carousel>
            </React.Fragment>
          ) : (
            <ImgPlaceholder className={styles["img-placeholder"]} />
          )}
          {this.state.imgs === false
            ? null
            : this.state.imgs.map((img, i) => {
                return (
                  <img
                    src={process.env.REACT_APP_LOCALHOST + img.src}
                    style={{ display: "none" }}
                    key={i}
                    index={i}
                    onLoad={(e) => {
                      let i = e.target.getAttribute("index");
                      this.setState((prev) => {
                        let newLoaded = [...prev.loaded];
                        newLoaded[i] = true;
                        return { loaded: newLoaded, anyLoaded: true };
                      });
                    }}
                  />
                );
              })}
        </ResponsiveContainer>
      </>
    );
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_LOCALHOST + "heroCarouselImages.php")
      .then((res) => res.json())
      .then((res) => {
        let loaded = [];
        res.forEach((e, i) => {
          loaded.push(false);
        });
        this.setState({ imgs: res, loaded: loaded });
      });
  };

  mountImgs = () => {};
  // <div className={styles.item}>
  //   <img
  //     loading="lazy"
  //     className={styles.bg}
  //     src={computerImg}
  //     alt={this.state.imgs[]}
  //   />
  // </div>
}

export default HeroCarousel;
