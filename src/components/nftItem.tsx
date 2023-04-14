import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

export default function NftItem({
  index,
  logo,
  name,
  symbol,
  volume,
  id
}: {
  index: number,
  logo: string | StaticImageData,
  name: string,
  symbol: string,
  volume: number,
  id: number
}) {
  const router = useRouter();

  return (
    <div key={index} className="flex flex-row items-center gap-6 bg-white border border-[#EBEFF1] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] rounded-[15px]" onClick={() => router.push('/wallet/detail?id=' + id)}>
      <Image className="rounded-[15px]" src={logo} width={90} height={90} alt="token1" />
      <div className="flex flex-col flex-grow">
        <p className="font-semibold text-lg leading-[21px] text-black">{name}</p>
        <p className="font-semibold text-sm leading-[17px] text-black">{symbol}</p>
        <p className="font-medium text-[15px] leading-[18px] text-[#9395A4] mt-[6px]">{volume}</p>
      </div>
    </div>
  );
}