import { NextResponse } from 'next/server'
import {
  WebpayPlus,
  Options,
  IntegrationApiKeys,
  Environment,
  IntegrationCommerceCodes,
} from 'transbank-sdk'

export async function POST(req: Request) {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

  try {
    const formData = await req.formData()
    const token = formData.get('token_ws') as string | null

    if (!token) {
      return NextResponse.redirect(new URL('/pago?status=cancelled', base))
    }

    const tx = new WebpayPlus.Transaction(
      new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS,
        IntegrationApiKeys.WEBPAY,
        Environment.Integration
      )
    )

    const result = await tx.commit(token)

    if (result.response_code === 0) {
      const params = new URLSearchParams({
        status: 'approved',
        amount: String(result.amount),
        order: result.buy_order,
        card: result.card_detail?.card_number ?? '',
      })
      return NextResponse.redirect(new URL(`/pago?${params}`, base))
    }

    return NextResponse.redirect(new URL('/pago?status=failed', base))
  } catch (err) {
    console.error('Webpay commit error:', err)
    return NextResponse.redirect(new URL('/pago?status=failed', base))
  }
}
