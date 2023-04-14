'use client';

import { useRouter } from 'next/navigation';
import { Key, useEffect, useState } from 'react';
import Image from 'next/image';
import MenuSwitch from '@/components/menuSwitch';
import NftItem from '@/components/nftItem';
import TokenItem from '@/components/tokenItem';
import MainLayout from '@/layouts/mainLayout';
import tokenImage from '@/assets/images/tokens/token1.png';
import nftImage from '@/assets/images/nfts/nft1.png';
import { INft } from '@/data/nftData';
import { IToken } from '@/data/tokenData';
import copyIcon from '@/assets/svgs/copy.svg';
import transferIcon from '@/assets/svgs/transfer.svg';
import swapIcon from '@/assets/svgs/swap.svg';
import topIcon from '@/assets/svgs/top.svg';

export default function Wallet() {
  const router = useRouter();

  const [expandStatus, setExpandStatus] = useState<Boolean>(false);
  const [switchStatus, setSwitchStatus] = useState<Boolean>(true);
  const [tokenList, setTokenList] = useState<IToken[]>([]);
  const [nftList, setNftList] = useState<INft[]>([]);

  useEffect(() => {
    // Load token data
    fetch('/api/tokenlist')
      .then((res) => res.json())
      .then((data) => {
        setTokenList(data);
      });

    // Load nft data
    fetch('/api/nftlist')
      .then((res) => res.json())
      .then((data) => {
        setNftList(data);
      });
  }, []);

  const handleExpandPanel = () => {
    setExpandStatus(!expandStatus);
  }

  const handleSwitchMenu = (result: boolean) => {
    setSwitchStatus(result);
  }

  return (
    <MainLayout>
      {/* Summary */}
      <div className="flex px-[25px] pb-[21px]" style={{ display: expandStatus ? 'none' : 'flex' }}>
        <div className="flex flex-col w-full px-5 py-[15px] bg-[#ffffff66] rounded-[25px] backdrop-blur-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
          {/* Hi message */}
          <p className="font-semibold text-sm leading-[17px] text-[#26273C]">000 wallet</p>
          {/* Money */}
          <p className="font-medium text-[28px] leading-[33px text-[#333333]] mt-2.5">32,128 C2E</p>
          {/* Points */}
          <p className="font-medium text-lg leading-[21px] text-[#9395A4]">3,000 point</p>
          {/* Serial Number */}
          <div className="flex flex-row gap-1 mt-4">
            <p className="font-medium text-xs leading-[14px] text-[#9395A4]">0x164...C8e6</p>
            <Image src={copyIcon} alt="copy" onClick={() => navigator.clipboard.writeText("0x164...C8e6")} />
          </div>
          {/* Button Group */}
          <div className="flex flex-row gap-[15px] justify-between mt-4">
            {/* Transfer Button */}
            <div className="flex justify-start items-center gap-3 flex-1 px-[15px] py-[9px] rounded-[25px] bg-[#ffffffcc]" onClick={() => router.push('/transfer')}>
              <Image src={transferIcon} alt="transfer" />
              <p className="font-bold text-[13px] leading-4 tracking-[0.13em] text-[#000000]">Transfer</p>
            </div>
            {/* Swap Button */}
            <div className="flex justify-start items-center gap-3 flex-1 px-[15px] py-[9px] rounded-[25px] bg-[#ffffffcc]" onClick={() => router.push('/swap')}>
              <Image src={swapIcon} alt="transfer" />
              <p className="font-bold text-[13px] leading-4 tracking-[0.13em] text-[#000000]">Swap</p>
            </div>
          </div>
        </div>
      </div>
      {/* Panel */}
      <div className="flex flex-col items-center bg-white rounded-t-[25px] pt-1 px-[15px]" style={{ height: expandStatus ? 'calc(100vh - 144px)' : 'calc(100vh - 378px)' }}>
        <div className="flex flex-col gap-[3px] w-full px-2.5">
          {/* Scroll Top Button */}
          <div className="flex justify-center w-full py-1" onClick={() => handleExpandPanel()}>
            <Image src={topIcon} alt="top" />
          </div>
          {/* Switch Button */}
          <MenuSwitch trueTitle="Token" falseTitle="NFT" onChange={(result: boolean) => handleSwitchMenu(result)} />
        </div>
        {/* Token List */}
        <div className="grid grid-cols-1 gap-[29px] w-full px-2.5 my-2 py-2.5 overflow-y-auto" style={{ display: switchStatus ? 'grid' : 'none' }}>
          {
            tokenList.map((tokenItem: IToken, index: number) => (
              <TokenItem index={index} logo={tokenImage} name={tokenItem.name} symbol={tokenItem.symbol} volume={tokenItem.volume} id={tokenItem.id} />
            ))
          }
        </div>
        {/* NFT List */}
        <div className="grid grid-cols-1 gap-[18px] w-full px-2.5 my-2 py-2.5 overflow-y-auto" style={{ display: !switchStatus ? 'grid' : 'none' }}>
          {
            nftList.map((nftItem: INft, index: number) => (
              <NftItem index={index} logo={nftImage} name={nftItem.name} symbol={nftItem.symbol} volume={nftItem.volume} id={nftItem.id} />
            ))
          }
        </div>
      </div>
    </MainLayout>
  )
}