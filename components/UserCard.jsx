import React, { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [onClick, setOnClick] = useState(false);
  const onClickHander = () => {
    if (onClick) {
      setOnClick(false);
      return;
    } else {
      setOnClick(true);
    }
  };

  return (
    <div
      className="border-bottom"
      onClick={() => {
        onClickHander();
      }}
    >
      <div className="d-flex align-items-center p-3">
        <img src={`${props.img}`} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {onClick === true ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {onClick && (
        <UserCardDetail email={props.email} address={props.address} />
      )}
    </div>
  );
}
