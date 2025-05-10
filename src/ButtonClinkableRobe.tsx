import { ButtonRobe } from "robes"
import type { ButtonClinkableRobeProps } from "./types"
import ButtonClinkRobe from "./ButtonClinkRobe"

export default function ButtonClinkableRobe (props: ButtonClinkableRobeProps) {
  if (props.href == null) {
    return <ButtonRobe {...props.button} />
  }
  return <ButtonClinkRobe {...props} href={props.href} />
}

