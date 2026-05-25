export default function FooterSection() {
  return (
    <>
      <div style={{ background: '#0F172A', padding: '2rem clamp(1rem, 5vw, 3rem)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
          <strong style={{ color: 'white', fontWeight: 600 }}>Imprint (Election / Promotional Material)</strong>
          <br />
          Promoted by Peter Geary, on behalf of David Tyler / Bletchley Conservative Club, 111 Queensway, Bletchley, Milton Keynes MK2 2DN
        </p>
      </div>
      <div style={{ background: '#0B1120', padding: '1.5rem clamp(1rem, 5vw, 3rem)', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          &copy; 2026 David Tyler — Conservative Councillor, Olney & Rural Ward, Milton Keynes City Council
        </p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', opacity: 0.5, marginTop: '0.25rem' }}>
          Proudly serving our community
        </p>
      </div>
    </>
  )
}
