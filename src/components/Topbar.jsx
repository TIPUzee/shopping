import React, { PureComponent } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "../sass/Topbar.module.sass";
import SearchTextField from "./SearchTextField";

class Topbar extends PureComponent {
  state = { cartCount: 3 };
  render() {
    return (
      <>
        <div className={styles.containerFluid}>
          <div className={styles.container}>
            <div className={styles.logo}></div>
            <SearchTextField></SearchTextField>
            <div className={styles.cartIconHolder}>
              <ShoppingCartOutlinedIcon className={styles.cartIcon} />
              <p className={styles.cartCount}>{this.state.cartCount}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Topbar;
