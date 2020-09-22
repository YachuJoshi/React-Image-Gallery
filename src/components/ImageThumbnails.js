import React from "react";
import styles from "./ImageThumbnails.module.scss";
import { Thumbnail } from "../ui-kit/Thumbnail";

export const ImageThumbnails = ({ pictures }) => {
  return (
    <div className={styles.ImageThumbnailsContainer}>
      {pictures.map((picture, index) => (
        <Thumbnail key={index} picture={picture} index={index} />
      ))}
    </div>
  );
};
