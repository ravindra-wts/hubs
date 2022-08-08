import React, { useRef,useState } from "react";
import {setAvatar } from './hooks/useSetAvatar'
function ReadyPlayerMe({ store, scene, onClose }) {

  //   const subdomain = "demo"; // Replace with your custom subdomain
  //   const frame = document.getElementById("frame");
  const frameRef = useRef();
  //   console.log("data", store, scene, onClose);
  //   frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;

  const styles = {
    width: "100vw",
    height: "70vh",
    margin: "0",
    border: "none"
  };

  window.addEventListener("message", subscribe);
  document.addEventListener("message", subscribe);

  function subscribe(event) {
    const json = parse(event);

    if (json?.source !== "readyplayerme") {
      return;
    }

    // Susbribe to all events sent from Ready Player Me once frame is ready
    if (json.eventName === "v1.frame.ready") {
      frameRef.current.contentWindow.postMessage(
        JSON.stringify({
          target: "readyplayerme",
          type: "subscribe",
          eventName: "v1.**"
        }),
        "*"
      );
    }

    // Get avatar GLB URL
    if (json.eventName === "v1.avatar.exported") {
      console.log(`Avatar URL: ${json.data.url}`);
      setAvatar(store, scene, onClose,json.data.url)
      //   document.getElementById("avatarUrl").innerHTML = `Avatar URL: ${json.data.url}`;
      // frameRef.current.hidden = true;
    }

    // Get user id
    if (json.eventName === "v1.user.set") {
      console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
    }
  }

  function parse(event) {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  }

  return (
    <>
      <iframe
        style={styles}
        ref={frameRef}
        allow="camera *; microphone *"
        src={"https://demo.readyplayer.me/avatar?frameApi"}
      />
     
    </>
  );
}

export default ReadyPlayerMe;
