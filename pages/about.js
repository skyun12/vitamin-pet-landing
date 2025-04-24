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
        backgroundColor: '#f9f9f9',
        padding: '60px 20px',
        color: '#1a2b4c'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>브랜드 소개</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '24px' }}>
          Health & Pet USA는 미국산 건강기능식품과 반려동물 영양제를 전문적으로 제공합니다.
          <br /><br />
          ✔ 미국 FDA 등록 제조사의 정식 제품만을 선별합니다.<br />
          ✔ 성인 비타민, 키즈 비타민, 반려견 비타민으로 구성하여 맞춤형 건강을 제안합니다.<br />
          ✔ 정직한 성분, 합리적인 가격, 그리고 신뢰감을 드리는 브랜드를 추구합니다.
        </p>
        <img
          src="/images/about-banner.jpg"
          alt="브랜드 배너"
          style={{
            maxWidth: '100%',
            borderRadius: '12px',
            marginTop: '40px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
        />
        <div style={{ marginTop: '30px' }}>
          <Link href="/" style={{ color: '#003366', textDecoration: 'underline' }}>
            ← 메인 페이지로 돌아가기
          </Link>
        </div>
      </main>
    </>
  );
}
