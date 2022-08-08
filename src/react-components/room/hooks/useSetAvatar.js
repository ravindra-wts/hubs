import React,{useState ,} from 'react'

export  function setAvatar(store, scene, onClose,url) {
        url = url.replace(/^https?:\/\//, '')
        console.log("url in use callback");
        store.update({ profile: { ...store.state.profile, ...{ avatarId:url  } } });
        scene.emit("avatar_updated");
        url ="https://"+url;
        store.update({ profile: { ...store.state.profile, ...{ avatarId: url } } });
        scene.emit("avatar_updated");
        onClose();
      
     
     
}

