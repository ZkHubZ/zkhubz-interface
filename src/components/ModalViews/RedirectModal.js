import "./RedirectModal.css";
import Modal from "../Modal/Modal";
import Checkbox from "../Checkbox/Checkbox";
import { t, Trans } from "@lingui/macro";
import ExternalLink from "components/ExternalLink/ExternalLink";
import Button from "components/Button/Button";

export function RedirectPopupModal({
  redirectModalVisible,
  setRedirectModalVisible,
  appRedirectUrl,
  setRedirectPopupTimestamp,
  setShouldHideRedirectModal,
  shouldHideRedirectModal,
}) {
  const onClickAgree = () => {
    if (shouldHideRedirectModal) {
      setRedirectPopupTimestamp(Date.now());
    }
  };

  return (
    <Modal
      className="RedirectModal"
      isVisible={redirectModalVisible}
      setIsVisible={setRedirectModalVisible}
      label={t`Launch App`}
    >
      <Trans>You are leaving ZMX.io and will be redirected to a third party, independent website.</Trans>
      <br />
      <br />
      <Trans>
        The website is a community deployed and maintained instance of the open source{" "}
        <ExternalLink href="https://github.com/zmx-io/zmx-interface">ZMX front end</ExternalLink>, hosted and served on
        the distributed, peer-to-peer <ExternalLink href="https://ipfs.io/">IPFS network</ExternalLink>.
      </Trans>
      <br />
      <br />
      <Trans>
        Alternative links can be found in the{" "}
        <ExternalLink href="https://zmxio.gitbook.io/zmx/app-links">docs</ExternalLink>.
        <br />
        <br />
        By clicking Agree you accept the <ExternalLink href="https://zmx.io/#/terms-and-conditions">
          T&Cs
        </ExternalLink>{" "}
        and <ExternalLink href="https://zmx.io/#/referral-terms">Referral T&Cs</ExternalLink>.
        <br />
        <br />
      </Trans>
      <div className="mb-sm">
        <Checkbox isChecked={shouldHideRedirectModal} setIsChecked={setShouldHideRedirectModal}>
          <Trans>Don't show this message again for 30 days.</Trans>
        </Checkbox>
      </div>
      <Button variant="primary-action" className="w-100" to={appRedirectUrl} onClick={onClickAgree}>
        <Trans>Agree</Trans>
      </Button>
    </Modal>
  );
}
