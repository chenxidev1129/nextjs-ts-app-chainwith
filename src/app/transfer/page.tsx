'use client'

import { Key, useEffect, useState } from 'react';
import { IToken } from '@/data/tokenData';
import SubLayout from '@/layouts/subLayout';
import CoinItem from '@/components/coinItem';
import nftImage from '@/assets/images/nfts/nft1.png';

export default function Transfer() {
  const [tokenList, setTokenList] = useState<IToken[]>([]);

  useEffect(() => {
    // Load token data
    fetch('/api/tokenlist')
      .then((res) => res.json())
      .then((data) => {
        setTokenList(data);
      });
  }, []);

  return (
    <SubLayout backgroundColor="#FFADB2" title="Coin Transfer">
      <p className="font-medium text-lg leading-[21px] text-black">Please select coins.</p>
      <div className="grid grid-cols-1 divide-y-[0.5px] divide-[#E5E7F3] w-full mt-[53px] px-2.5 pb-10 overflow-y-auto">
        {
          tokenList.map((tokenItem: IToken, index: number) => (
            <CoinItem index={index} logo={nftImage} name={tokenItem.name} symbol={tokenItem.symbol} volume={tokenItem.volume} id={tokenItem.id} />
          ))
        }
      </div>
    </SubLayout>
  );
}