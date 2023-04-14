'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RootLayout from '../layout';
import logoImage from '@/assets/images/logo.png';
import closeIcon from '@/assets/svgs/close-black.svg';
import rightIcon from '@/assets/svgs/right.svg';

export default function Menu() {
  const router = useRouter();

  return (
    <RootLayout>
      <main className="flex flex-col min-h-[100vh] bg-white relative">
        {/* Close Button */}
        <div className="flex justify-center items-center w-12 h-12 absolute top-6 right-[25px] bg-[#ffffffcc] shadow-[0_20px_60px_rgba(55,62,125,0.05)] rounded-full" onClick={() => router.back()}>
          <Image src={closeIcon} alt="close" />
        </div>
        {/* Title */}
        <div className="flex flex-row items-center gap-1 px-[18px] pt-[42px]">
          <Image src={logoImage} width={30} height={30} alt="wallet" />
          <p className="text-xl font-bold leading-6 text-black">C2E Wallet</p>
        </div>
        {/* Menu List */}
        <div className="flex flex-col px-[25px] mt-[46px] w-full">
          <div className="flex flex-row items-center justify-between" onClick={() => router.push('/history')}>
            <p className="text-xl font-medium leading-6 text-black">History</p>
            <Image src={rightIcon} alt="right" />
          </div>
          <hr className="mt-[41px] border-y-[0.5px] border-[#E3E5EC]"></hr>
          <div className="flex flex-row justify-between items-start mt-[35px]">
            <p className="text-xl font-medium leading-6 text-black">Email</p>
            <div className="flex flex-col gap-[3px] items-end">
              <p className="font-medium text-base leading-[19px] text-[#B4B4B4]">d121aaa@gmail.com</p>
              <p className="font-medium text-base leading-[19px] text-[#B4B4B4]">GOOGLE 가입</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-[30px]">
            <p className="text-xl font-medium leading-6 text-black">Change Password</p>
            <Image src={rightIcon} alt="right" />
          </div>
          <div className="flex flex-row justify-between items-center mt-[21px]">
            <p className="text-xl font-medium leading-6 text-black">Logout</p>
            <Image src={rightIcon} alt="right" />
          </div>
          <hr className="mt-[59px] border-y-[0.5px] border-[#E3E5EC]"></hr>
          <div className="flex flex-row justify-between items-center mt-[35px]">
            <p className="text-xl font-medium leading-6 text-black">Terms and Conditions of Service</p>
            <Image src={rightIcon} alt="right" />
          </div>
          <div className="flex flex-row justify-between items-center mt-[21px]">
            <p className="text-xl font-medium leading-6 text-black">Privacy Policy</p>
            <Image src={rightIcon} alt="right" />
          </div>
          <p className="font-medium text-sm leading-[17px] text-[#B4B4B4] mt-[163px]">Chain With Inc. All rights reserved</p>
        </div>
      </main>
    </RootLayout>
  )
}