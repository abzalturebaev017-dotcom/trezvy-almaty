'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { PHONE_TEL, WHATSAPP_URL } from '@/lib/contacts'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  place: string
  children: ReactNode
}

export function TrackedPhoneLink({ place, children, ...rest }: Props) {
  return (
    <a {...rest} href={PHONE_TEL} onClick={() => trackPhoneClick(place)}>
      {children}
    </a>
  )
}

export function TrackedWhatsAppLink({ place, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(place)}
    >
      {children}
    </a>
  )
}
