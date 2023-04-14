'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IMinting } from '@/data/mintingData';
import MainLayout from '@/layouts/mainLayout';
import mintingImage from '@/assets/images/mintings/minting1.png';
import closeIcon from '@/assets/svgs/close-white.svg';

export default function MintingDetail() {
  const query = useSearchParams();
  const id = query.get('id');
  const [showImageState, setShowImageState] = useState<Boolean>(false);
  const [mintingItem, setMintingItem] = useState<IMinting>();

  useEffect(() => {
    // Load minting data
    fetch('/api/mintinglist/item?id=' + id)
      .then((res) => res.json())
      .then((data) => {
        setMintingItem(data);
      });
  }, []);

  if (mintingItem) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center bg-white rounded-t-[25px] py-[33px] px-[25px] h-[calc(100vh-144px)]">
          {/* Minting Info */}
          <div className="flex flex-col w-full h-full shadow-lg rounded-[10px] relative">
            <Image src={mintingImage} className="w-full h-auto" alt="minting" onClick={() => setShowImageState(true)} />
            <div className="absolute bottom-0 flex flex-col w-full bg-white rounded-b-[10px] py-5 px-[15px] h-[50%]">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-0.5">
                  <p className="font-bold text-2xl leading-[29px] text-black">{mintingItem.name}</p>
                  <p className="font-bold text-base leading-[19px] text-black">{mintingItem.symbol}</p>
                </div>
                {/* Action Button */}
                <div className="flex justify-center items-center px-[17px] py-[19px] bg-[#42CBB4] rounded-[15px] shadow-[0_5px_20px_rgba(25,28,50,0.1)]">
                  <p className="font-semibold text-lg leading-[27px] text-white">{mintingItem.price} C2E</p>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-[29px]">
                <p className="text-xl font-medium leading-6 text-black">Quantity</p>
                <p className="text-xl font-medium leading-6 text-black">{mintingItem.quantity}</p>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <p className="text-xl font-medium leading-6 text-black">Network Fee</p>
                <p className="text-xl font-medium leading-6 text-black">{mintingItem.fee} BFC</p>
              </div>
              {/* Button Group */}
              <div className="flex flex-row gap-5 mt-[25px]">
                {/* Refusal Button */}
                <div className="flex justify-center items-center flex-1 bg-[#DEDEDE] shadow-[0_5px_20px_rgba(25,28,50,0.1)] rounded-[40px]">
                  <p className="font-semibold text-[15px] leading-[22px] text-[#333333] py-4">Refusal</p>
                </div>
                {/* Agreement Button */}
                <div className="flex justify-center items-center flex-1 bg-[#42CBB4] shadow-[0_5px_20px_rgba(25,28,50,0.1)] rounded-[40px]">
                  <p className="font-semibold text-[15px] leading-[22px] text-white py-4">Agreement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="image_dialog" className="absolute top-0 left-0 flex flex-col gap-3 justify-center items-center w-full h-[100vh] bg-[#595959cc]" style={{ display: showImageState ? 'flex' : 'none' }}>
          <div className="flex justify-end w-full px-9">
            <Image src={closeIcon} alt="close" onClick={() => setShowImageState(false)} />
          </div>
          <div className="px-[25px]">
            <Image src={mintingImage} alt="minting" />
          </div>
        </div>
      </MainLayout>
    );
  } else {
    <MainLayout>No data</MainLayout>
  }
}