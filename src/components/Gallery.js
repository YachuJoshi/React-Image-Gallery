import React, { useState, useCallback } from "react";
import cx from "classnames";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { PICTURES, MINIFIED, Length } from "../Content";
import { Container } from "../ui-kit";

import { Arrows } from "./Arrows";
import { PictureBoard } from "./PictureBoard";
import { Pagination } from "./Pagination";
import { ImageThumbnails } from "./ImageThumbnails";
import { SettingsPanel } from "./SettingsPanel";
import { Controls } from "./Controls";

import { search } from "../utils";

import "./App.scss";
import styles from "./Gallery.module.scss";

const initialState = {
  settings: [
    { id: 1, value: "showFullScreenButton", isChecked: true },
    { id: 2, value: "showPlayButton", isChecked: true },
    { id: 3, value: "showBullets", isChecked: true },
    { id: 4, value: "showIndex", isChecked: false },
  ],
};

export const Gallery = () => {
  const [checkBoxesState, setCheckBoxesState] = useState(initialState);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playInterval, setPlayInterval] = useState(3000);
  const handle = useFullScreenHandle();
  let [isFullScreen, setIsFullScreen] = useState(false);
  const FullScreenIcon = !isFullScreen ? MdFullscreen : MdFullscreenExit;

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
  let showPlayButton = search("showPlayButton", initialState.settings)
    .isChecked;
  let showFullScreenButton = search(
    "showFullScreenButton",
    initialState.settings
  ).isChecked;

  const handleFullScreenChange = useCallback(() => {
    if (!isFullScreen) {
      handle.enter();
      setIsFullScreen(true);
    } else {
      handle.exit();
      setIsFullScreen(false);
    }
  }, [isFullScreen, handle]);

  return (
    <Container className={styles.Container}>
      <FullScreen handle={handle} className={styles.Gallery}>
        <PictureBoard
          className="picture-board"
          mobileDimClassName="picture-board-mobile"
          pictures={PICTURES}
          interval={playInterval}
          isPlaying={isPlaying}
        />
        <Arrows maxLength={PICTURES.length - 1} className="icon-arrows" />
        <ImageThumbnails pictures={MINIFIED} className="image-thumbnail" />
        {showPlayButton && (
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            className="icon-play-toggle"
          />
        )}
        {showFullScreenButton && (
          <FullScreenIcon
            onClick={handleFullScreenChange}
            className={cx(styles.FullScreenIcon, "icon-full-screen")}
          />
        )}
      </FullScreen>
      {showBullets && <Pagination size={Length} />}
      <SettingsPanel
        playInterval={playInterval}
        setPlayInterval={setPlayInterval}
        settings={initialState.settings}
        handleCheckEvent={handleCheckEvent}
      />
    </Container>
  );
};
