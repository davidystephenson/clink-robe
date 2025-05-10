import type { ClinkProps } from "clink-react"
import type { ButtonLinkableRobeProps, ButtonLinkRobeProps, LinkableRobeProps, LinkRobeProps } from "robes"

export type ClinkRobeProps = ClinkProps & LinkRobeProps
export type ClinkableRobeProps = ClinkProps & LinkableRobeProps
export type ButtonClinkRobeProps = ClinkProps & ButtonLinkRobeProps
export type ButtonClinkableRobeProps = ClinkProps & ButtonLinkableRobeProps