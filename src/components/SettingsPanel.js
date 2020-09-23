import React from "react";

import styles from "./SettingsPanel.module.scss";

export const SettingsPanel = ({
  playInterval,
  setPlayInterval,
  settings,
  handleCheckEvent,
}) => {

  return (
    <div className={styles.SettingsPanel}>
      <h1 className={styles.Heading}>Settings</h1>
      <div className={styles.Controls}>
        <span>Play Interval</span>
        <input
          type="text"
          value={playInterval}
          className={styles.IntervalInput}
          onChange={(e) => setPlayInterval(+e.target.value)}
        />
      </div>
      <div className={styles.Checkboxes}>
        {settings.map((setting) => (
          <div key={setting.value}>
            <input
              type="checkbox"
              value={setting.value}
              checked={setting.isChecked}
              onChange={handleCheckEvent}
            />
            <span>{setting.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
