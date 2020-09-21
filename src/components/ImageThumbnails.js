import React from "react";
import cx from "classnames";
import styles from "./ImageThumbnails.module.scss";

export const ImageThumbnails = ({ pictures, activeIndex, setActiveIndex }) => {
  return (
    <div className={styles.ImageThumbnailsContainer}>
      {pictures.map((picture, index) => (
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
      ))}
    </div>
  );
};
