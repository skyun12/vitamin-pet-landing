import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health & Pet USA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="미국산 건강기능식품 및 반려동물 영양제 전문 브랜드 Health & Pet USA." />
      </Head>
      <main className="p-10 bg-white text-center font-sans">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Health & Pet USA</h1>
        <p className="text-lg text-gray-600 mb-10">
          미국산 건강기능식품 & 반려동물 영양제 전문 브랜드
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="https://smartstore.naver.com/whdejr486" target="_blank" rel="noopener noreferrer">
            <img src="/images/ih-popular.jpg" alt="인기 상품" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <p className="mt-2 text-gray-700 font-semibold">인기 건강기능식품</p>
          </a>
          <a href="https://smartstore.naver.com/whdejr486" target="_blank" rel="noopener noreferrer">
            <img src="/images/ih-pet.jpg" alt="반려동물 상품" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <p className="mt-2 text-gray-700 font-semibold">반려동물 영양제</p>
          </a>
          <a href="https://smartstore.naver.com/whdejr486" target="_blank" rel="noopener noreferrer">
            <img src="/images/ih-kids.jpg" alt="키즈 상품" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
            <p className="mt-2 text-gray-700 font-semibold">키즈 건강기능식품</p>
          </a>
        </div>
      </main>
    </>
  );
}
