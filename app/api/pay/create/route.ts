import { NextResponse } from 'next/server'
import {
  WebpayPlus,
  Options,
  IntegrationApiKeys,
  Environment,
  IntegrationCommerceCodes,
} from 'transbank-sdk'

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    const tx = new WebpayPlus.Transaction(
      new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS,
        IntegrationApiKeys.WEBPAY,
        Environment.Integration
      )
    )

    const buyOrder = `FE-${Date.now()}`
    const sessionId = `S-${Date.now()}`
    const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    const returnUrl = `${base}/api/pay/return`

    const response = await tx.create(buyOrder, sessionId, amount, returnUrl)
    console.log('\n✅ WEBPAY TOKEN:', response.token, '\n')
    return NextResponse.json({ token: response.token, url: response.url })
  } catch (err) {
    console.error('Webpay create error:', err)
    return NextResponse.json({ error: 'No se pudo iniciar el pago' }, { status: 500 })
  }
}
