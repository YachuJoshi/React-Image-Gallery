import React, { useState, useRef } from "react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { PICTURES, MINIFIED, Length } from "../Content";
import { Container } from "../ui-kit";

import { Icons } from "./Icons";
import { PictureBoard } from "./PictureBoard";
import { Pagination } from "./Pagination";
import { ImageThumbnails } from "./ImageThumbnails";
import { SettingsPanel } from "./SettingsPanel";

import { search } from "../utils";

import styles from "./Gallery.module.scss";

const initialState = {
  settings: [
    { id: 1, value: "showFullScreen", isChecked: false },
    { id: 2, value: "showPlayButton", isChecked: false },
    { id: 3, value: "showBullets", isChecked: true },
    { id: 4, value: "showIndex", isChecked: false },
    { id: 4, value: "isLeftToRight", isChecked: false },
  ],
};

export const Gallery = () => {
  const [checkBoxesState, setCheckBoxesState] = useState(initialState);
  const [playInterval, setPlayInterval] = useState(3000);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleCheckEvent = (event) => {
    let settings = checkBoxesState.settings;
    settings.forEach((setting) => {
      if (setting.value === event.target.value) {
        setting.isChecked = event.target.checked;
      }
    });
    setCheckBoxesState({ settings });
  };

  let showBullets = search("showBullets", initialState.settings).isChecked;
  let isLeftToRight = search("isLeftToRight", initialState.settings).isChecked;

  return (
    <Container className={styles.Container}>
      <PictureBoard
        pictures={PICTURES}
        interval={playInterval}
        isLeftToRight={isLeftToRight}
      />
      <Icons maxLength={PICTURES.length - 1} />
      {showBullets && <Pagination size={Length} />}
      <ImageThumbnails pictures={MINIFIED} />
      <SettingsPanel
        playInterval={playInterval}
        setPlayInterval={setPlayInterval}
        settings={initialState.settings}
        handleCheckEvent={handleCheckEvent}
      />
    </Container>
  );
};
