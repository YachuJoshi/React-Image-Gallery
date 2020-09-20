import React from "react";
import { Image } from "../ui-kit";
import styles from "./PictureBoard.module.scss";

export const PictureBoard = ({ pictures, activeIndex }) => {
  return (
    <div className={styles.Gallery}>
      {pictures.map((picture, index) => (
        <Image
          key={index}
          src={picture}
          alt="image-landscape"
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
};
