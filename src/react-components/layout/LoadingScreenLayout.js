import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadingScreenLayout.scss";
import { Column } from "../layout/Column";
import { AppLogo } from "../misc/AppLogo";
import Bgvideo from "./loadingBgVideo.mp4";
import wingsLogo from "./hero-wired-logo.png";

export function LoadingScreenLayout({ center, bottom }) {
  return (
    <>
      <div>
        <video className={"bgVideo"} muted autoPlay loop>
          <source type="video/mp4" src={"https://heroviredhubs-assets.internal.herovired.com/files/70215615-c041-4ba6-8e49-b73ad2126cbd.mp4"} />
        </video>
        <div className="content">
          <img src={"https://heroviredhubs-assets.internal.herovired.com/files/ee8af4e6-f494-4f43-9388-f15bc2c38fad.png"} />

          <div className="loading-text">
            <span className="loading-text-words">L</span>
            <span className="loading-text-words">O</span>
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">D</span>
            <span className="loading-text-words">I</span>
            <span className="loading-text-words">N</span>
            <span className="loading-text-words">G</span>
          </div>

          <div>
            <span>2/2</span>
          </div>
        </div>
      </div>
    </>
    // <div className={styles.loadingScreenLayout}>
    //   <Column center padding gap="lg" className={styles.center}>
    //     <AppLogo className={styles.logo} />
    //     {center}
    //   </Column>
    //   {bottom && (
    //     <Column center className={styles.bottom}>
    //       {bottom}
    //     </Column>
    //   )}
    // </div>
  );
}

LoadingScreenLayout.propTypes = {
  center: PropTypes.node,
  bottom: PropTypes.node
};
