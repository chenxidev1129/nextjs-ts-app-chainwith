'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Key, useEffect, useState } from 'react';
import { IHistory } from '@/data/historyData';
import DetailLayout from '@/layouts/detailLayout';
import tokenImage from '@/assets/images/tokens/token1.png';

export default function History() {
  const router = useRouter();
  const [historyList, setHistoryList] = useState<IHistory[]>([]);

  useEffect(() => {
    // Load history data
    fetch('/api/historylist')
      .then((res) => res.json())
      .then((data) => {
        setHistoryList(data);
      });
  }, []);

  const showHistoryList = () => {
    var beforeDate = 0;
    var storedBeforeDate = 0;

    return historyList.map((historyItem: IHistory, index: Key) => {
      const date = new Date(historyItem.time * 1000);
      beforeDate = storedBeforeDate;
      storedBeforeDate = date.getDate();

      return (
        <div key={index} className="flex flex-col w-full gap-2" onClick={() => router.push('/history/detail?id=' + historyItem.id)}>
          <p className="font-medium text-lg leading-[27px] text-[#9395A4] mt-3" style={{ display: (beforeDate == storedBeforeDate) ? 'none' : 'flex' }}>{date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'}</p>
          <div key={index} className="flex flex-row items-center gap-[17px]">
            <Image className="rounded-full" src={tokenImage} width={56} height={56} alt="token1" />
            <div className="flex flex-col gap-[3px] flex-grow">
              <div className="flex gap-[6px]">
                <p className="font-medium text-lg leading-[27px] text-[#26273C]">{historyItem.status}</p>
                <p className="font-medium text-lg leading-[27px] text-[#FF6464]">{historyItem.successful ? '' : 'Failed'}</p>
              </div>
              <p className="font-medium text-sm leading-[21px] text-[#9395A4]">{date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3')}</p>
            </div>
            <p className="font-medium text-lg leading-[27px] text-[#26273C]">{historyItem.volume.toString(3)}C2E</p>
          </div>
        </div>
      );
    })
  }

  return (
    <DetailLayout title="History">
      <div className="flex flex-col overflow-y-auto mt-[27px] px-2.5 pb-[37px] h-[calc(100vh-106px)]">
        {/* History List By Day */}
        <div className="flex flex-col gap-[26px] w-full">
          {
            showHistoryList()
          }
        </div>
      </div>
    </DetailLayout>
  )
}