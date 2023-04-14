'use client'

import { useRouter } from 'next/navigation';
import RootLayout from '@/app/layout';
import Image from 'next/image';
import backIcon from '@/assets/svgs/back.svg';

export default function DetailLayout({
  children,
  title
}: {
  children: React.ReactNode,
  title?: string
}) {

  const router = useRouter();

  return (
    <RootLayout>
      <main className="flex flex-col min-h-[100vh] bg-[#FFB783] px-[15px] pt-[37px]" style={{ backgroundColor: 'white' }}>
        <div className="flex flex-row justify-center relative">
          <p className="font-semibold text-xl leading-[30px] text-[#26273C]">{title}</p>
          <div className="absolute -top-[9px] right-2.5 w-12 h-12 flex justify-center items-center bg-[#ffffffcc] shadow-[0_20px_60px_rgba(55,62,125,0.05)] rounded-full" onClick={() => router.back()}>
            <Image src={backIcon} alt="back" />
          </div>
        </div>
        {children}
      </main>
    </RootLayout>
  );
}