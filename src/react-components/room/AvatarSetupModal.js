import React from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { BackButton } from "../input/BackButton";
import { AvatarSettingsContent } from "./AvatarSettingsContent";
import { FormattedMessage } from "react-intl";

export function AvatarSetupModal({ onBack, ...rest }) {
  return (
    <Modal
      title={<FormattedMessage id="avatar-setup-sidebar.title" defaultMessage="Avatar Setup" />}
      beforeTitle={<BackButton onClick={onBack} />}
      className={"avatarSetupModal"}
    >
      <AvatarSettingsContent {...rest} />
    </Modal>
  );
}

AvatarSetupModal.propTypes = {
  onBack: PropTypes.func,
  onClose: PropTypes.func
};
