import TradeFlagIcon from "./components/TradeFlagIcon";
import { ICON_TYPE } from "./components/util";

export default function App() {
  return (
    <TradeFlagIcon
      type={ICON_TYPE.CRYPTO}
      icon="usdcco"
      style={{ width: "30px", height: "30px" }}
    />
  );
}
