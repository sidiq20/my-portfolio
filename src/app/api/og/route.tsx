import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* First name line */}
          <h1
            style={{
              fontSize: '220px',
              fontFamily: 'serif',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 0.85,
              color: '#ffffff',
              margin: 0,
              padding: 0,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            SIDIQ
          </h1>

          {/* Last name line (muted) */}
          <h1
            style={{
              fontSize: '220px',
              fontFamily: 'serif',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 0.85,
              color: 'rgba(255, 255, 255, 0.25)',
              margin: 0,
              padding: 0,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            OLASODE
          </h1>

          {/* Role */}
          <p
            style={{
              fontSize: '24px',
              fontFamily: 'monospace',
              color: '#666666',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '80px 0 0 0',
            }}
          >
            — FULL STACK DEVELOPER, AI ENTHUSIAST & WEB3 DEVELOPER
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
