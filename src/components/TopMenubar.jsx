import React, { PureComponent } from "react";
import styles from "../sass/TopMenubar.module.sass";
import { Menu } from "@mui/icons-material";
import Sidebar from "./Sidebar";

class TopMenubar extends PureComponent {
  state = {
    menuActive: false,
  };
  render() {
    return (
      <>
        <div className={styles.containerFluid}>
          <div className={styles.container + " container mx-auto"}>
            <button
              className={styles.menuToggler}
              onClick={this.handlerToOpenSidebar}
            >
              <Menu accentHeight="100%" className={styles.menuTogglerIcon} />
              All
            </button>
            <menu className={styles.menuWrapper}>
              <li>
                <button>Today's Deals</button>
              </li>
              <li>
                <button>Customer Service</button>
              </li>
              <li>
                <button>Registry</button>
              </li>
              <li>
                <button>Gift Cards</button>
              </li>
              <li>
                <button>Sell</button>
              </li>
            </menu>
          </div>
        </div>
        <Sidebar
          menuActive={this.state.menuActive}
          handleSidebarDeactivate={this.handlerToCloseSidebar}
          accountName={""}
        />
      </>
    );
  }

  handlerToOpenSidebar = () => {
    this.setState({ menuActive: true });
  };

  handlerToCloseSidebar = () => {
    this.setState({ menuActive: false });
  };
}

export default TopMenubar;
