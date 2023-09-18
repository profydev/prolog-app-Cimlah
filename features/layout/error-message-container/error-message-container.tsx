import { useContext } from "react";
import styles from "./error-message-container.module.scss";
import { ProjectListContext } from "pages/dashboard";

export function ErrorMessageContainer() {
  const { setKey } = useContext(ProjectListContext);

  return (
    <div className={styles.container} id="error-message-container">
      <div className={styles.iconAndError}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/alert-circle.svg" alt="Alert Circle" />
        <p>There was a problem while loading the project data</p>
      </div>
      <button onClick={() => setKey?.((prev) => prev + 1)}>
        <p>Try again</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/arrow-right.svg" alt="Right Arrow" />
      </button>
    </div>
  );
}
