import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health & Pet USA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="성인, 키즈, 반려견을 위한 미국산 건강기능식품 브랜드 Health & Pet USA" />
      </Head>
      <main style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff',
        padding: '60px 20px',
        textAlign: 'center',
        color: '#1a2b4c'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Health & Pet USA</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '16px', color: '#445' }}>
          Made in USA. 믿을 수 있는 건강
        </p>
        <img
          src="/images/main-banner.jpg"
          alt="메인 배너"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '12px',
            marginTop: '40px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.1)'
          }}
        />
        <div style={{ marginTop: '40px' }}>
          <a href="https://smartstore.naver.com/whdejr486" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#003366',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            네이버 쇼핑 바로가기
          </a>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Link href="/about" style={{ color: '#003366', textDecoration: 'underline' }}>
            브랜드 소개 보기 →
          </Link>
        </div>
      </main>
    </>
  );
}
