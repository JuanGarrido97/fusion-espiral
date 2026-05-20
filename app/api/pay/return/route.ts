import { NextResponse } from 'next/server'
import {
  WebpayPlus,
  Options,
  IntegrationApiKeys,
  Environment,
  IntegrationCommerceCodes,
} from 'transbank-sdk'

async function handleReturn(req: Request) {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

  try {
    const url = new URL(req.url)
    let token = url.searchParams.get('token_ws')
    let tbkToken = url.searchParams.get('TBK_TOKEN')

    if (!token && !tbkToken) {
      try {
        const formData = await req.formData()
        token = formData.get('token_ws') as string | null
        tbkToken = formData.get('TBK_TOKEN') as string | null
      } catch { /* no body */ }
    }

    // Cancelación por el usuario — no llamar commit
    if (tbkToken && !token) {
      return NextResponse.redirect(new URL('/pago?status=cancelled', base))
    }

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
    const base2 = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    return NextResponse.redirect(new URL('/pago?status=failed', base2))
  }
}

export async function POST(req: Request) { return handleReturn(req) }
export async function GET(req: Request) { return handleReturn(req) }
