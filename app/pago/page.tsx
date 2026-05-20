import Link from 'next/link'
import { formatCLP } from '@/lib/formatters'

export default async function PagoPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; amount?: string; order?: string; card?: string }>
}) {
  const { status, amount, order, card } = await searchParams
  const approved = status === 'approved'
  const cancelled = status === 'cancelled'

  return (
    <main className="pago-page">
      <div className="pago-card">
        <div className={`pago-icon ${approved ? 'pago-icon--ok' : 'pago-icon--err'}`}>
          {approved ? '✓' : cancelled ? '○' : '✕'}
        </div>

        {approved && (
          <>
            <h1 className="display">Pago <span className="it">aprobado</span></h1>
            <p className="pago-desc">Tu pedido está en camino. Recibirás un mensaje de confirmación pronto.</p>
            <div className="pago-detail">
              {amount && (
                <div className="pago-row">
                  <span>Total pagado</span>
                  <span>{formatCLP(Number(amount))}</span>
                </div>
              )}
              {order && (
                <div className="pago-row">
                  <span>Orden</span>
                  <span>{order}</span>
                </div>
              )}
              {card && (
                <div className="pago-row">
                  <span>Tarjeta</span>
                  <span>**** {card.slice(-4)}</span>
                </div>
              )}
            </div>
          </>
        )}

        {cancelled && (
          <>
            <h1 className="display">Pago <span className="it">cancelado</span></h1>
            <p className="pago-desc">No se realizó ningún cobro. Puedes volver a intentarlo.</p>
          </>
        )}

        {!approved && !cancelled && (
          <>
            <h1 className="display">Pago <span className="it">rechazado</span></h1>
            <p className="pago-desc">No se pudo procesar el pago. Verifica los datos de tu tarjeta e intenta de nuevo.</p>
          </>
        )}

        <Link href="/" className="btn" style={{ marginTop: 32, display: 'inline-flex' }}>
          Volver a la tienda <span className="arrow" />
        </Link>
      </div>
    </main>
  )
}
