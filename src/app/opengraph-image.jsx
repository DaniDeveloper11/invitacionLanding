import { ImageResponse } from 'next/og'

import { site } from '@/config/site'

export const alt =
  'Invitaciones digitales a la medida para bodas y XV años. Desde $1,600, lista en 3 días, sin costo por invitado.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const datos = ['Desde $1,600', 'Lista en 3 días', 'Sin costo por invitado']

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#fbf8f3',
        padding: 40,
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid #e4dcd0',
          padding: '56px 64px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 72, height: 1, backgroundColor: '#a87c3f' }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              color: '#8a6a32',
              textTransform: 'uppercase',
            }}
          >
            Bodas · XV años · Eventos
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.05,
              color: '#23201c',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex' }}>Una invitación hecha</div>
            <div style={{ display: 'flex' }}>
              <span style={{ color: '#6e2639', fontStyle: 'italic' }}>
                solo
              </span>
              <span>&nbsp;para su evento</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.45,
              color: '#5c564e',
              maxWidth: 820,
              display: 'flex',
            }}
          >
            Se diseña desde cero con sus colores y le llega a cada invitado por
            WhatsApp con un solo enlace.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #e4dcd0',
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', gap: 36, flex: '1 1 auto' }}>
            {datos.map((dato) => (
              <div
                key={dato}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: '#6e2639',
                  }}
                />
                <div style={{ fontSize: 24, color: '#23201c' }}>{dato}</div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              color: '#23201c',
              textTransform: 'uppercase',
              display: 'flex',
              flex: '0 0 auto',
              paddingLeft: 32,
            }}
          >
            {site.brand}
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  )
}
