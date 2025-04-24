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
      <main style={{ fontFamily: 'sans-serif', padding: '40px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
        <h1 style={{ fontSize: '3rem', color: '#003366' }}>Health & Pet USA</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          미국산 프리미엄 건강기능식품 & 반려동물 영양제 쇼핑몰
        </p>
        <img src="/images/banner.jpg" alt="Health & Pet Banner" style={{ maxWidth: '100%', marginTop: '20px', borderRadius: '12px' }} />
        <div style={{ marginTop: '40px' }}>
          <a href="https://smartstore.naver.com/whdejr486" target="_blank" style={{
            backgroundColor: '#0055A4',
            color: '#fff',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            🛒 스마트스토어 바로가기
          </a>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Link href="/about" style={{ color: '#0055A4', fontSize: '0.95rem' }}>브랜드 소개 보기 →</Link>
        </div>
      </main>
    </>
  );
}
