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
        backgroundColor: '#fff',
        padding: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2b4c' }}>
          Health & Pet USA
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px' }}>
          Made in USA. 믿을 수 있는 건강과 반려동물 영양제
        </p>
        <img src="/images/banner-1.jpg" alt="비타민 배너 1" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '40px' }} />
        <img src="/images/banner-2.jpg" alt="비타민 배너 2" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
      </main>
    </>
  );
}
