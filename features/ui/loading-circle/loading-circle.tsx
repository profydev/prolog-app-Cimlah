import classNames from "classnames";
import styles from "./loading-circle.module.scss";

export function LoadingCircle() {
  return (
    <div className={styles.circleWrapper}>
      <div
        id="loadingCircle"
        className={classNames(styles.circle, styles.circleAnimation)}
      ></div>
    </div>
  );
}
