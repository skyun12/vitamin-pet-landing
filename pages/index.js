import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health & Pet USA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
        fontFamily: 'Arial, sans-serif',
        padding: '40px 20px',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        color: '#1a2b4c'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Health & Pet USA</h1>
        <p style={{ fontSize: '1.2rem', color: '#445', marginTop: '12px' }}>
          미국산 비타민 & 반려동물 영양제 전문 스토어
        </p>
        <img
          src="/images/banner.jpg"
          alt="Health & Pet USA 배너"
          style={{
            maxWidth: '300px',
            borderRadius: '10px',
            marginTop: '30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
        <div style={{ marginTop: '40px' }}>
          <a href="https://smartstore.naver.com/whdejr486" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#003366',
            color: '#ffffff',
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            네이버 쇼핑 바로가기
          </a>
        </div>
      </main>
    </>
  );
}
