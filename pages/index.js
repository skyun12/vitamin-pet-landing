import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health & Pet USA</title>
        <meta name="description" content="미국산 건강기능식품 및 반려동물 영양제 전문 브랜드" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
        fontFamily: 'Arial, sans-serif',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f4f6f9'
      }}>
        <h1 style={{ fontSize: '3rem', color: '#1a2b4c' }}>Health & Pet USA</h1>
        <p style={{ fontSize: '1.2rem', color: '#4f5d75' }}>
          미국산 프리미엄 건강기능식품 & 반려동물 영양제 전문 브랜드
        </p>
        <img
          src="/images/banner.jpg"
          alt="Health & Pet Banner"
          style={{
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '12px',
            marginTop: '30px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
          }}
        />
        <div style={{ marginTop: '40px' }}>
          <a
            href="https://smartstore.naver.com/whdejr486"
            target="_blank"
            style={{
              backgroundColor: '#003366',
              color: '#ffffff',
              padding: '14px 28px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
            }}
          >
            🛍 스마트스토어 바로가기
          </a>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Link href="/about" style={{ color: '#003366', fontSize: '0.95rem' }}>브랜드 소개 보기 →</Link>
        </div>
      </main>
    </>
  );
}
