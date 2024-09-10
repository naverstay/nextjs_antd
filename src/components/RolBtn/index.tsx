import {RobloxIem} from "@/types";
import {clsx} from "clsx";

export const RolBtn = ({name, count, active}: RobloxIem) => {

  const className = clsx("flex items-center rounded gap-1.5 py-1.5 px-3",
    {"bg-blue text-white": active},
    {"bg-blue/[.08] text-blue": !active}
  );

  return (
    <div className={className}>
      <span className={"text-[14px] font-medium leading-5"}>{name}</span>
      {count && <span className={"text-[10px] font-semibold"}>{count}</span>}
    </div>
  )
}

export default RolBtn
