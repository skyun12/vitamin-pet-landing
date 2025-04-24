import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health & Pet USA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="성인, 키즈, 반려동물을 위한 미국산 건강기능식품 브랜드 Health & Pet USA" />
      </Head>
      <main style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff',
        color: '#1a2b4c',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Health & Pet USA</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '12px', color: '#445' }}>
          Made in USA. 믿을 수 있는 건강
        </p>
        <img src="/images/banner.jpg" alt="메인 배너" style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '12px',
          marginTop: '30px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
        }} />
        <div style={{ marginTop: '30px' }}>
          <a href="https://smartstore.naver.com/whdejr486" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#003366',
            color: '#ffffff',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}>
            네이버 쇼핑 바로가기
          </a>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '50px'
        }}>
          <Category image="/images/adult.jpg" label="성인 비타민" />
          <Category image="/images/kids.jpg" label="키즈 비타민" />
          <Category image="/images/pet.jpg" label="반려동물 영양제" />
        </div>

        <section style={{ marginTop: '60px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '16px' }}>브랜드 소개</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
            Health & Pet USA는 미국산 건강기능식품과 반려동물 영양제를 전문적으로 제공합니다.
            <br /><br />
            ✔ 미국 FDA 등록 제조사의 제품만을 선별합니다. <br />
            ✔ 성인, 키즈, 반려견 건강에 맞춘 구성으로 제공합니다. <br />
            ✔ 정직한 성분, 합리적인 가격, 그리고 고객 신뢰를 중요하게 생각합니다.
          </p>
        </section>
      </main>
    </>
  );
}

function Category({ image, label }) {
  return (
    <a href="https://smartstore.naver.com/whdejr486" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1a2b4c' }}>
      <div style={{ width: '220px', textAlign: 'center' }}>
        <img src={image} alt={label} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{label}</p>
      </div>
    </a>
  );
}
