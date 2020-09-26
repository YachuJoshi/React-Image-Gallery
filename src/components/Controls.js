import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { FiPlay, FiPause } from "react-icons/fi";

import styles from "./Controls.module.scss";

export const Controls = ({ isPlaying, setIsPlaying, className }) => {
  const Icon = !isPlaying ? FiPlay : FiPause;

  return (
    <Icon
      className={cx(styles.Icon, className)}
      onClick={() => setIsPlaying(!isPlaying)}
    />
  );
};

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};
