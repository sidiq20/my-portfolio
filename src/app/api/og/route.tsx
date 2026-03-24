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
          color: '#ffffff',
          fontFamily: 'sans-serif',
          border: '10px solid #222222',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            border: '2px solid #333333',
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              fontFamily: 'serif',
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
              margin: 0,
              padding: 0,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Sidiq Olasode
          </h1>
          <p
            style={{
              fontSize: '36px',
              color: '#a1a1aa',
              marginTop: '20px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Full Stack Developer & AI Enthusiast & Web3 Developer
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
