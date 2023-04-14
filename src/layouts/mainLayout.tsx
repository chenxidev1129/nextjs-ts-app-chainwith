'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import logoImage from '@/assets/images/logo.png';
import RootLayout from '@/app/layout';
import menuIcon from '@/assets/svgs/menu.svg';

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  const router = useRouter();
  const pathname = usePathname();

  const menuList = [
    {
      title: 'Wallet',
      link: '/wallet'
    },
    {
      title: 'Minting',
      link: '/minting'
    }
  ];

  return (
    <RootLayout>
      <main className="flex flex-col min-h-[100vh] bg-[#C3F4FF]">
        {/* Header Section */}
        <div className="w-full flex flex-col gap-[15px] px-[25px] pt-[25px] pb-5">
          <div className="flex flex-row items-center justify-between w-full">
            {/* Logo & Title */}
            <div className="flex flex-row items-center gap-1">
              <Image width={30} height={30} src={logoImage} alt="logo" />
              <h1 className="font-medium text-xl leading-[30px]">C2E Wallet</h1>
            </div>
            {/* Menu Button */}
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full" onClick={() => router.push('/menu')}>
              <Image src={menuIcon} alt="menu" />
            </div>
          </div>
          {/* Tab Menu */}
          <div className="flex flex-row items-start gap-1">
            {
              menuList.map((menuItem, index) => (
                <div key={index} className="flex flex-col justify-center gap-[7px]" onClick={() => router.push(menuItem.link)}>
                  <p className="font-bold text-xl leading-[24px] px-4 text-[#26273C]" style={{ color: pathname.indexOf(menuItem.link) >= 0 ? "#26273C" : "#757575" }}>{menuItem.title}</p>
                  <hr className="border-b-4 border-[#26273C] rounded-[5px]" style={{ display: pathname.indexOf(menuItem.link) >= 0 ? "flex" : "none" }}></hr>
                </div>
              ))
            }
            {/* Activated Item */}
          </div>
        </div>
        {/* Body Section */}
        {children}
      </main>
    </RootLayout>
  );
}