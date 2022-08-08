import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { AvatarUrlModal } from "./AvatarUrlModal";
import {setAvatar } from './hooks/useSetAvatar'

export function AvatarUrlModalContainer({ store, scene, onClose }) {
  
  // const onSubmit = useCallback(
  //   ({ url }) => {
  //     store.update({ profile: { ...store.state.profile, ...{ avatarId: url } } });
  //     scene.emit("avatar_updated");
  //     onClose();
  //   },
  //   [store, scene, onClose]
  // );
  
  const onSubmit = ({url})=>{
    setAvatar(store, scene, onClose,url)
  } 
  
 

  return <AvatarUrlModal onSubmit={onSubmit} onClose={onClose} />;
}

AvatarUrlModalContainer.propTypes = {
  store: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
