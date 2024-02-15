import { FaCircle } from "react-icons/fa";

import { SUCCESS_COLOR, WARNING_COLOR } from "./../../constants";

import useIdle from "../../hooks/useIdle";

export default function IdleStatus() {
  const isIdle = useIdle(5000);

  return <FaCircle color={isIdle ? WARNING_COLOR : SUCCESS_COLOR} />;
}
