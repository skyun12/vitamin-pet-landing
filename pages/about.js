import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>브랜드 소개 | Health & Pet USA</title>
      </Head>
      <main style={{
        fontFamily: 'Arial, sans-serif',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#333'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1a2b4c' }}>브랜드 소개</h1>
        <p style={{ marginTop: '20px', lineHeight: '1.6' }}>
          Health & Pet USA는 미국산 프리미엄 건강기능식품과 반려동물 영양제를 제공합니다.
          <br /><br />
          ✔ 미국 FDA 등록 제조사의 제품만 취급합니다.
          <br />
          ✔ 성인용, 키즈용, 반려동물용 비타민 제품을 전문 분류합니다.
          <br />
          ✔ 정직한 성분, 합리적인 가격을 약속드립니다.
        </p>
        <img
          src="/images/about.jpg"
          alt="About Visual"
          style={{
            maxWidth: '100%',
            marginTop: '30px',
            borderRadius: '12px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
          }}
        />
        <div style={{ marginTop: '40px' }}>
          <Link href="/" style={{ color: '#003366' }}>← 메인으로 돌아가기</Link>
        </div>
      </main>
    </>
  );
}
