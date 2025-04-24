import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>브랜드 소개 | Health & Pet USA</title>
      </Head>
      <main className="p-10 font-sans bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">브랜드 소개</h1>
        <p className="text-lg leading-7">
          Health & Pet USA는 미국산 건강기능식품과 반려동물 영양제를 전문으로 소개하는 브랜드입니다.
          <br /><br />
          ✔ 미국 FDA 등록 제조사의 정식 제품만을 취급합니다. <br />
          ✔ 성인용, 키즈용, 반려동물용 제품을 분류하여 제공합니다. <br />
          ✔ 믿을 수 있는 원료, 정직한 가격으로 고객에게 다가갑니다.
        </p>
        <div className="mt-8">
          <Link href="/" className="text-blue-700 hover:underline">← 메인 페이지로 돌아가기</Link>
        </div>
      </main>
    </>
  );
}
