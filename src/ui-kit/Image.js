import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useActiveIndexContext } from "../context";

import styles from "./Image.module.scss";

export const Image = ({ src, alt, className }) => {
  const { activeIndex } = useActiveIndexContext();
  return (
    <figure
      className={styles.ImageContainer}
      style={{
        transform: `translate3d(${-activeIndex * 100}%, 0, 0)`,
      }}
    >
      <img src={src} alt={alt} className={cx(styles.Image, className)} />
    </figure>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
