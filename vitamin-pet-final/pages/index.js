import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitamin Pet Landing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#f0f8ff'
      }}>
        <h1 style={{ fontSize: '3rem', color: '#333' }}>
          🐾 Vitamin Pet Landing 🐾
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
          건강기능식품과 반려동물 영양제를 소개하는 스마트한 쇼핑 랜딩페이지입니다.
        </p>
        <img
          src="/images/pet-banner.jpg"
          alt="펫 배너"
          style={{
            maxWidth: '600px',
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            marginBottom: '40px'
          }}
        />
        <div>
          <a
            href="https://smartstore.naver.com/whdejr486"
            style={{
              backgroundColor: '#ff6f61',
              color: 'white',
              padding: '14px 28px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
            }}
          >
            🛍 스마트스토어 바로가기
          </a>
        </div>
      </main>
    </>
  );
}
