import { ButtonRobe } from "robes"
import { ButtonClinkRobe } from "./ButtonClinkRobe"
import type { ButtonClinkableRobeProps } from "./types"

export const ButtonClinkableRobe = (props: ButtonClinkableRobeProps) => {
  if (props.href == null) {
    return <ButtonRobe {...props.button} />
  }
  return <ButtonClinkRobe {...props} href={props.href} />
}

