'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IHistory } from '@/data/historyData';
import DetailLayout from '@/layouts/detailLayout';
import tokenImage from '@/assets/images/tokens/token1.png';
import copyIcon from '@/assets/svgs/copy.svg';

export default function HistoryDetail() {
  const query = useSearchParams();
  const id = query.get('id');
  const [historyItem, setHistoryItem] = useState<IHistory>();

  useEffect(() => {
    // Load history data
    fetch('/api/historylist/item?id=' + id)
      .then((res) => res.json())
      .then((data) => {
        setHistoryItem(data);
      });
  }, []);

  if (historyItem) {
    return (
      <DetailLayout title="History">
        <div className="flex flex-col px-2.5 mt-[48px]">
          <div className="flex flex-row gap-3 items-center">
            <div className="w-[11px] h-[11px] bg-[#F7931A] rounded-full"></div>
            <p className="font-medium text-lg leading-[21px] text-[#F7931A]">{historyItem.status}</p>
          </div>
          <div className="flex flex-row gap-2 items-center mt-[17px]">
            <div className="w-8 h-8">
              <Image src={tokenImage} alt="Coin" />
            </div>
            <p className="font-normal text-lg leading-[21px] text-black">{historyItem.symbol}</p>
          </div>
          <div className="flex mt-1.5">
            <p className="font-semibold text-2xl leading-[29px] text-[#0A0A0A]">{historyItem.volume.toString(3)}</p>
          </div>
          <div className="flex flex-col gap-[7px] mt-[27px]">
            <p className="font-medium text-base leading-[19px] text-black">Time</p>
            <p className="font-medium text-base leading-[19px] text-[#9395A4]">{historyItem.time}</p>
          </div>
          <div className="flex flex-row justify-between mt-[30px]">
            <div className="flex flex-col gap-[7px]">
              <p className="font-medium text-base leading-[19px] text-black">Sender</p>
              <div className="flex flex-row items-center gap-[5px]">
                <p className="font-normal text-base leading-[19px] text-[#9395A4]">0x164...C8e6</p>
                <Image src={copyIcon} alt='copy' onClick={() => navigator.clipboard.writeText("0x164...C8e6")} />
              </div>
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-medium text-base leading-[19px] text-black">Receiver</p>
              <div className="flex flex-row items-center gap-[5px]">
                <p className="font-normal text-base leading-[19px] text-[#9395A4]">0x164...C8e6</p>
                <Image src={copyIcon} alt='copy' onClick={() => navigator.clipboard.writeText("0x164...C8e6")} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-[30px]">
            <p className="font-normal text-base leading-[19px] text-black">Fee</p>
            <p className="font-medium text-base leading-[19px] text-[#9395A4]">{historyItem.fee} USDT</p>
          </div>
          <div className="flex flex-col gap-1 mt-[30px]">
            <p className="font-normal text-base leading-[19px] text-black">TXID</p>
            <p className="font-medium text-sm leading-[17px] text-[#4373EB]">{historyItem.tax}</p>
          </div>
        </div>
      </DetailLayout>
    );
  } else {
    <DetailLayout>No data</DetailLayout>
  }
}