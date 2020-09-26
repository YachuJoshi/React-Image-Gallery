import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

export const Container = ({ children, className }) => {
  return <div className={cx(styles.Container, className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
