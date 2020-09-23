import React from "react";
import cx from "classnames";
import styles from "./ImageThumbnails.module.scss";
import { Thumbnail } from "../ui-kit/Thumbnail";

export const ImageThumbnails = ({ pictures, className }) => {
  return (
    <div className={cx(styles.ImageThumbnailsContainer, className)}>
      {pictures.map((picture, index) => (
        <Thumbnail key={index} picture={picture} index={index} />
      ))}
    </div>
  );
};
