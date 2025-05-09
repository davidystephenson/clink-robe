import { type JSX } from 'react'
import { type ClinkRobeProps } from './types'
import { useLinkRobeColor } from 'robes'
import { Link } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export function ClinkRobe(
  props: ClinkRobeProps
): JSX.Element {
  const location = useLocation()
  const routeActive = location.pathname === props.to
  const active = props.active ?? routeActive
  const color = useLinkRobeColor({ ...props, active })
  return (
    <Link as={RouterLink} {...props} color={color}>
      {props.children}
    </Link>
  )
}

export default ClinkRobe