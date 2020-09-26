import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useActiveIndexContext } from "../context";

import styles from "./Thumbnail.module.scss";

export const Thumbnail = ({ picture, index }) => {
  const { activeIndex, setActiveIndex } = useActiveIndexContext();
  return (
    <figure
      key={index}
      aria-label={`Go to slide ${index + 1}`}
      className={cx(styles.ThumbnailInner, {
        [styles.Active]: activeIndex === index,
      })}
      onClick={() => setActiveIndex(index)}
    >
      <img
        src={picture}
        alt="min-landscape"
        className={styles.ThumbnailImage}
      />
    </figure>
  );
};

Thumbnail.propTypes = {
  picture: PropTypes.stringR.isRequired,
  index: PropTypes.number,
};
