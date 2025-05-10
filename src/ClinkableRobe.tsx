import ClinkRobe from "./ClinkRobe"
import type { ClinkableRobeProps } from "./types"

export default function ClinkableRobe (props: ClinkableRobeProps) {
  if (props.href == null) {
    return <>{props.children}</>
  }
  return <ClinkRobe {...props} href={props.href} />
}

