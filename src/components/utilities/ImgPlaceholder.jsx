import placeholderImg from "../img/img-placeholder.png";
import styles from "../../sass/ImgPlaceholder.module.sass";

function ImgPlaceholder(props) {
  const opacity = props.hasOwnProperty("opacity") ? props.opacity : 0.4;
  return (
    <div
      className={`${styles["placeholder-wrapper"]}${
        props.hasOwnProperty("className") ? " " + props.className : ""
      }`}
    >
      <img
        src={placeholderImg}
        alt="Image placeholder"
        className={styles.placeholder}
        style={{ opacity: [opacity] }}
      />
    </div>
  );
}

export default ImgPlaceholder;
