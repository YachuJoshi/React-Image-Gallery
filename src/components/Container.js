import React from "react";
import cx from "classnames";
import styles from "./Container.module.scss";

export const Container = ({ children, className }) => {
  return <div className={cx(styles.Container, className)}>{children}</div>;
};
