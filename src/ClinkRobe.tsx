import Clink from "clink-react";
import { LinkRobe } from "robes";
import type { ClinkRobeProps } from "./types";

export default function ClinkRobe(props: ClinkRobeProps) {
  return (
    <Clink View={LinkRobe} {...props} />
  )
}