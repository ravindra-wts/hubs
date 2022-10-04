import React from "react";
import PropTypes from "prop-types";
import { Button, AcceptButton } from "../input/Button";
import styles from "./AvatarSettingsContent.scss";
import { TextInputField } from "../input/TextInputField";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";
import ReadyPlayerMe from "./ReadyPlayerMe.js";

export function AvatarSettingsContent({
  displayName,
  displayNameInputRef,
  disableDisplayNameInput,
  onChangeDisplayName,
  avatarPreview,
  displayNamePattern,
  onChangeAvatar,
  sidebar,
  store,
  scene,
  onClose,
  finished,
  ...rest
}) {
  return (
    <Column as="form" className={styles.content} {...rest}>
      <TextInputField
        disabled={disableDisplayNameInput}
        label={<FormattedMessage id="avatar-settings-content.display-name-label" defaultMessage="Display Name" />}
        value={displayName}
        pattern={displayNamePattern}
        spellCheck="false"
        required
        onChange={onChangeDisplayName}
        // description={
        //   <FormattedMessage
        //     id="avatar-settings-content.display-name-description"
        //     defaultMessage="Alphanumerics, hyphens, underscores, and tildes. At least 3 characters, no more than 32"
        //   />
        // }
        ref={displayNameInputRef}
      />

      {/* {sidebar ? avatarPreview || <div /> : <ReadyPlayerMe />} */}

      {sidebar ? (
        <>
          <div className={styles.avatarPreviewContainer}>
            {avatarPreview || <div />}
            <Button type="button" preset="basic" onClick={onChangeAvatar}>
              <FormattedMessage id="avatar-settings-content.change-avatar-button" defaultMessage="Change Avatar" />
            </Button>
          </div>
          <AcceptButton preset="accept" type="submit" />
        </>
      ) : (
        <ReadyPlayerMe width={"80vw"} height={"70vh"} store={store} scene={scene} onClose={finished} />
      )}
    </Column>
  );
}

AvatarSettingsContent.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  displayNameInputRef: PropTypes.func,
  disableDisplayNameInput: PropTypes.bool,
  displayNamePattern: PropTypes.string,
  onChangeDisplayName: PropTypes.func,
  avatarPreview: PropTypes.node,
  onChangeAvatar: PropTypes.func,
  sidebar: PropTypes.bool,
  store: PropTypes.object,
  onClose: PropTypes.func,
  finished: PropTypes.func,
  scene: PropTypes.object
};
