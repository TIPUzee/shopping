import React, { PureComponent } from "react";
import {
  ArrowForwardIos,
  KeyboardArrowDownOutlined,
  ArrowBackOutlined,
  ClearOutlined,
  LanguageRounded,
  FlagOutlined,
  AccountCircle,
  ConstructionOutlined,
} from "@mui/icons-material";
import styles from "../sass/Sidebar.module.sass";
import DialogueBox from "./DialogueBox";

class Sidebar extends PureComponent {
  currOpenedMenu = false;
  performingTransition = false;
  mainMenu = false;
  state = {
    menus: false,
    comingSoonDialogue: false,
  };
  render() {
    return (
      <>
        {this.handleBody()}
        <div
          className={`${styles.dropback}${
            this.props.menuActive === true ? " " + styles.active : ""
          }`}
        >
          <div
            className={`${styles.sidebarWrapper}${
              this.props.menuActive === true ? " " + styles.active : ""
            }`}
          >
            <button className={styles.profileHeader}>
              <AccountCircle className={styles.accountCircleIcon} />
              Hello,
              {this.props.accountName != ""
                ? " " + this.props.account
                : " sign in"}
            </button>
            <div
              className={`${styles.menuOutterWrapper} ${styles.active}`}
              id={styles.mainMenu}
            >
              <div className={styles.menuWrapper}>
                {this.state.menus && this.renderMenus()}
              </div>
            </div>
            {this.innerMenusList.map((element) => element)}
          </div>
          <ClearOutlined
            className={styles.sidebarCloser}
            onClick={() => {
              this.props.handleSidebarDeactivate();
            }}
          />
        </div>
        <DialogueBox
          show={this.state.comingSoonDialogue}
          closeHandle={this.handleComingSoonDialogueBox}
        />
      </>
    );
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_LOCALHOST + "sidebarMenus.php")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ menus: res });
      });
  };

  currInnerMenuWrapperId = { value: 0 };
  keys = {
    mainMenu: {
      section: 0,
      menu: 0,
    },
  };
  renderMenus = () => {
    return (
      <>
        {Object.keys(this.state.menus).map((title, i) => {
          return (
            <div
              className={styles.menuSection}
              key={this.keys.mainMenu.section++}
            >
              <div className={styles.title}>{title}</div>
              <div className={styles.options}>
                {Object.keys(this.state.menus[title]).map((option, j) => {
                  return (
                    <React.Fragment key={j}>
                      {this.state.menus[title][option] == ""
                        ? null
                        : this.storeInnerMenusList(
                            j,
                            title,
                            option,
                            this.currInnerMenuWrapperId
                          )}
                      <div
                        className={styles.menu}
                        key={this.keys.mainMenu.menu++}
                        data-toggle-for={`sidebarInnerMenuWrapper${this.currInnerMenuWrapperId.value}`}
                        onClick={
                          this.state.menus[title][option] == ""
                            ? () => {
                                this.setState({ comingSoonDialogue: true });
                              }
                            : (e) => {
                                this.handleOpenInnerMenu(e);
                              }
                        }
                      >
                        {option}
                        {this.state.menus[title][option] == "" ? null : (
                          <ArrowForwardIos key={j} />
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className={`${styles.menuSection} ${styles.settingsMenuSection}`}>
          <div
            className={styles.title}
            onClick={() => {
              this.setState({ comingSoonDialogue: true });
            }}
          >
            Help & Settings
          </div>
          <div
            className={styles.options}
            onClick={() => {
              this.setState({ comingSoonDialogue: true });
            }}
          >
            <div
              className={styles.menu}
              onClick={() => {
                this.setState({ comingSoonDialogue: true });
              }}
            >
              Your Account
            </div>
            <div
              className={styles.menu}
              onClick={() => {
                this.setState({ comingSoonDialogue: true });
              }}
            >
              <LanguageRounded />
              English
            </div>
            <div
              className={styles.menu}
              onClick={() => {
                this.setState({ comingSoonDialogue: true });
              }}
            >
              <FlagOutlined />
              AccountCircle Pakistan
            </div>
            <div
              className={styles.menu}
              onClick={() => {
                this.setState({ comingSoonDialogue: true });
              }}
            >
              Customer Service
            </div>
            <div
              className={styles.menu}
              onClick={() => {
                this.setState({ comingSoonDialogue: true });
              }}
            >
              Sign in
            </div>
          </div>
        </div>
      </>
    );
  };

  handleOpenInnerMenu = (e) => {
    if (e.target.getAttribute("data-toggle-for") === undefined) {
      return;
    }

    this.currOpenedMenu = e.target;
    this.targetMenu = document.getElementById(
      this.currOpenedMenu.getAttribute("data-toggle-for")
    );
    this.targetMenu.classList.add(styles.active);

    if (!this.mainMenu) {
      this.mainMenu = document.getElementById(styles.mainMenu);
    }

    this.mainMenu.classList.remove(styles.active);
  };

  handleCloseInnerMenu = () => {
    if (!this.currOpenedMenu) {
      return;
    }

    this.targetMenu.classList.remove(styles.active);

    this.mainMenu.classList.add(styles.active);
  };

  handleBody = () => {
    if (this.props.menuActive) {
      document.body.classList.add("hiddenOverflow");
    } else {
      document.body.classList.remove("hiddenOverflow");
    }
    return null;
  };

  innerMenusList = [];

  storeInnerMenusList = (j, title, option, currId) => {
    currId.value = this.innerMenusList.length + 10;
    this.innerMenusList.push(
      <div
        className={`${styles.innerMenuWrapper} ${styles.menuWrapper}`}
        id={`sidebarInnerMenuWrapper${currId.value}`}
        key={currId.value}
      >
        <button
          className={styles.backToMainMenu}
          onClick={this.handleCloseInnerMenu}
        >
          <ArrowBackOutlined className={styles.backToMainMenuIcon} />
          MAIN MENU
        </button>
        {Object.keys(this.state.menus[title][option]).map((innerTitle, k) => {
          return (
            <div className={styles.menuSection} key={currId.value + k}>
              <div className={styles.title}>{innerTitle}</div>
              <div className={styles.options}>
                {Object.keys(this.state.menus[title][option][innerTitle]).map(
                  (innerOption, l) => {
                    return (
                      <div
                        className={styles.menu}
                        key={currId.value + k + l}
                        onClick={
                          this.state.menus[title][option][innerTitle][
                            innerOption
                          ] === ""
                            ? () => {
                                this.setState({ comingSoonDialogue: true });
                              }
                            : null
                        }
                      >
                        {innerOption}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    );

    return null;
  };

  // comingsoon dialogue box
  handleComingSoonDialogueBox = () => {
    this.setState({ comingSoonDialogue: false });
  };
}

export default Sidebar;
