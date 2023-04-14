'use client'

import { useRouter } from 'next/navigation';
import RootLayout from '@/app/layout';
import Image from 'next/image';
import backIcon from '@/assets/svgs/back.svg';

export default function SubLayout({
  children,
  backgroundColor,
  title
}: {
  children: React.ReactNode,
  backgroundColor: string & {},
  title: string
}) {
  const router = useRouter();

  return (
    <RootLayout>
      <main className="flex flex-col min-h-[100vh] bg-[#FFB783]" style={{ backgroundColor: backgroundColor }}>
        <div className="flex justify-end mt-8 pr-[25px]">
          {/* Back Button */}
          <div className="flex justify-center items-center w-12 h-12 bg-white shadow-[0_20px_60px_rgba(55,62,125,0.05)] rounded-[25px]" onClick={() => router.back()}>
            <Image src={backIcon} alt="back" />
          </div>
        </div>
        {/* Title */}
        <div className="flex px-[25px] mt-[31px]">
          <p className="font-bold text-2xl leading-[29px] text-white">{title}</p>
        </div>
        <div className="flex flex-col items-center bg-[#F7F7FA] rounded-t-[40px] mt-[15px] px-[15px] pt-10 h-[calc(100vh-155px)]">
          {children}
        </div>
      </main>
    </RootLayout>
  );
}