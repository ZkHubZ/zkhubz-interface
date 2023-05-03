import { t, Trans } from "@lingui/macro";
import StatsTooltipRow from "components/StatsTooltip/StatsTooltipRow";
import { BigNumber } from "ethers";
import { formatKeyAmount } from "lib/numbers";

type Props = {
  processedData: {
    zmxAprForEsGmx: BigNumber;
    zmxAprForNativeToken: BigNumber;
    zmxAprForNativeTokenWithBoost: BigNumber;
    zmxBoostAprForNativeToken?: BigNumber;
  };
  nativeTokenSymbol: string;
};

function renderEscrowedGMXApr(processedData) {
  if (!processedData?.zmxAprForEsGmx?.gt(0)) return;
  return (
    <StatsTooltipRow
      label={t`Escrowed ZMX APR`}
      showDollar={false}
      value={`${formatKeyAmount(processedData, "zmxAprForEsGmx", 2, 2, true)}%`}
    />
  );
}

export default function GMXAprTooltip({ processedData, nativeTokenSymbol }: Props) {
  return (
    <>
      {(!processedData.zmxBoostAprForNativeToken || processedData.zmxBoostAprForNativeToken.eq(0)) && (
        <StatsTooltipRow
          label={t`${nativeTokenSymbol} APR`}
          showDollar={false}
          value={`${formatKeyAmount(processedData, "zmxAprForNativeToken", 2, 2, true)}%`}
        />
      )}
      {processedData?.zmxBoostAprForNativeToken?.gt(0) ? (
        <div>
          <StatsTooltipRow
            label={t`${nativeTokenSymbol} Base APR`}
            showDollar={false}
            value={`${formatKeyAmount(processedData, "zmxAprForNativeToken", 2, 2, true)}%`}
          />
          <StatsTooltipRow
            label={t`${nativeTokenSymbol} Boosted APR`}
            showDollar={false}
            value={`${formatKeyAmount(processedData, "zmxBoostAprForNativeToken", 2, 2, true)}%`}
          />
          <div className="Tooltip-divider" />
          <StatsTooltipRow
            label={t`${nativeTokenSymbol} Total APR`}
            showDollar={false}
            value={`${formatKeyAmount(processedData, "zmxAprForNativeTokenWithBoost", 2, 2, true)}%`}
          />
          <br />
          {renderEscrowedGMXApr(processedData)}
          <br />
          <Trans>The Boosted APR is from your staked Multiplier Points.</Trans>
        </div>
      ) : (
        renderEscrowedGMXApr(processedData)
      )}
      <div>
        <br />
        <Trans>APRs are updated weekly on Wednesday and will depend on the fees collected for the week.</Trans>
      </div>
    </>
  );
}
