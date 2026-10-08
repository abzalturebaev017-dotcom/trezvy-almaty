declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const ADS_CONVERSION = 'AW-18492477168/KeOWCKC7jJUdEPCd8_FE'

function fireAdsConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: ADS_CONVERSION,
    value: 1.0,
    currency: 'USD',
  })
}

export function trackPhoneClick(place: string) {
  window.gtag?.('event', 'phone_click', { place })
  fireAdsConversion()
}

export function trackWhatsAppClick(place: string) {
  window.gtag?.('event', 'whatsapp_click', { place })
  fireAdsConversion()
}
