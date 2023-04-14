'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IToken } from '@/data/tokenData';
import SubLayout from '@/layouts/subLayout';
import nftImage from '@/assets/images/nfts/nft1.png';
import CustomInput from '@/components/customInput';
import CustomButton from '@/components/customButton';

export default function TransferSend() {
  const query = useSearchParams();
  const id = query.get('id');
  const [tokenItem, setTokenItem] = useState<IToken>();
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    // Load token data
    fetch('/api/tokenlist/item?id=' + id)
      .then((res) => res.json())
      .then((data) => {
        setTokenItem(data);
      });
  }, []);

  const handleMaxClick = () => {
    setAmount(tokenItem ? tokenItem.volume : 0);
  }

  return (
    <SubLayout backgroundColor="#FFADB2" title="Coin Transfer">
      {/* Photo */}
      <div className="flex justify-center mt-2.5">
        <Image className="rounded-full" src={nftImage} width={110} height={110} alt="logo"></Image>
      </div>
      {/* Address Input */}
      <CustomInput type="text" placeholder="Address of receiver" />
      {/* Amount Input */}
      <CustomInput type="number" placeholder="Amount" defaultValue={amount.toString()} isAction={true} actionTitle="Max" onClickAction={() => handleMaxClick()} />
      {/* Send Button */}
      <div className="flex flex-col gap-[18px] w-full mt-[57px]">
        <div className="flex justify-between px-2.5">
          <p className="font-medium text-base leading-6 text-[#F04949]">Network Fee</p>
          <p className="font-medium text-base leading-[19px] text-[#F04949]">1,000 BFC</p>
        </div>
        <CustomButton title="Send" backgroundColor="#BEBEBE" />
      </div>
    </SubLayout>
  )
}