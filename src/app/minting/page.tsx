'use client'

import { useEffect, useState } from 'react';
import { IMinting } from '@/data/mintingData';
import MainLayout from '@/layouts/mainLayout';
import MintingItem from '@/components/mintingItem';
import mintingImage from '@/assets/images/mintings/minting1.png';

export default function Minting() {
  const [mintingList, setMintingList] = useState<IMinting[]>([]);

  useEffect(() => {
    // Load minting data
    fetch('/api/mintinglist')
      .then((res) => res.json())
      .then((data) => {
        setMintingList(data);
      });
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col items-center bg-white rounded-t-[25px] pt-[25px] h-[calc(100vh-144px)]">
        {/* Minting List */}
        <div className="grid grid-cols-1 gap-10 w-full px-[25px] pt-[8px] pb-[33px] overflow-y-auto">
          {
            mintingList.map((mintingItem: IMinting, index: number) => (
              <MintingItem index={index} logo={mintingImage} name={mintingItem.name} symbol={mintingItem.symbol} volume={mintingItem.volume} id={mintingItem.id} />
            ))
          }
        </div>
      </div>
    </MainLayout>
  )
}