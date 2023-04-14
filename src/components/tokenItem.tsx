import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { Key } from 'react';

export default function TokenItem({
	key,
	logo,
	name,
	symbol,
	volume,
	id
}: {
	key: Key,
	logo: string | StaticImageData,
	name: string,
	symbol: string,
	volume: number,
	id: number
}) {
	const router = useRouter();

	return (
		<div key={key} className="flex flex-row items-center gap-4" onClick={() => router.push('/wallet/detail?id=' + id)}>
			<Image className="rounded-full" src={logo} width={56} height={56} alt="token1" />
			<div className="flex flex-col gap-[3px] flex-grow">
				<p className="font-medium text-lg leading-[27px] text-[#333333]">{name}</p>
				<p className="font-medium text-sm leading-[21px] text-[#9395A4]">{symbol}</p>
			</div>
			<p className="font-medium text-lg leading-[27px] text-[#333333]">{volume.toString(3)}</p>
		</div>
	);
}