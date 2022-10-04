import React, { useEffect, useRef, useState } from "react";

function ReadyPlayerMe({ store, scene, onClose, width, height, mediaSearchStore }) {
  // const [avatarUrl, setavatarUrl] = useState("");
  // console.log("props in RPM", store, scene, onClose);
  // const updateAvatar = useEffect(
  //   () => {
  //     if (avatarUrl) {
  //       console.log("updating avatar");
  //       store.update({ profile: { ...store.state.profile, ...{ avatarId: avatarUrl } } });
  //       scene.emit("avatar_updated");
  //       onClose();
  //     }
  //   },
  //   [avatarUrl]
  // );
  //   const subdomain = "demo"; // Replace with your custom subdomain
  //   const frame = document.getElementById("frame");
  const frameRef = useRef();
  //   console.log("data", store, scene, onClose);
  //   frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;

  const styles = {
    width: width ? width : "100vw",
    height: height ? height : "70vh",
    margin: "0",
    border: "none"
  };

  function parse(event) {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  }

  function subscribe(event) {
    const json = parse(event);

    if (json?.source !== "readyplayerme") {
      return;
    }

    // Susbribe to all events sent from Ready Player Me once frame is ready
    if (json.eventName === "v1.frame.ready") {
      if (frameRef.current) {
        frameRef.current.contentWindow.postMessage(
          JSON.stringify({
            target: "readyplayerme",
            type: "subscribe",
            eventName: "v1.**"
          }),
          "*"
        );
      }
    }

    // Get avatar GLB URL
    if (json.eventName === "v1.avatar.exported") {
      console.log(`Avatar URssssssssssssssssssL: ${json.data.url}`);
      // console.log("old url ", avatarUrl);

      console.log("updating avatar");
      store.update({ profile: { ...store.state.profile, ...{ avatarId: json.data.url } } });
      scene.emit("avatar_updated");
      console.log("updated avatar ");
      // if (mediaSearchStore) {
      //   mediaSearchStore.clearStashedQuery();
      // }
      onClose();

      //   document.getElementById("avatarUrl").innerHTML = `Avatar URL: ${json.data.url}`;
      // frameRef.current.hidden = true;
    }

    // Get user id
    if (json.eventName === "v1.user.set") {
      console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
    }
  }

  window.addEventListener("message", subscribe);
  document.addEventListener("message", subscribe);
  return (
    <>
      <iframe
        style={styles}
        ref={frameRef}
        allow="camera *; microphone *"
        src={"https://vr.readyplayer.me/avatar?frameApi"}
      />
    </>
  );
}

export default ReadyPlayerMe;
