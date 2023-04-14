import { MouseEvent, MouseEventHandler } from 'react';

export default function CustomButton({
  title,
  backgroundColor,
  onClick
}: {
  title: string,
  backgroundColor?: string & {},
  onClick?: MouseEventHandler<HTMLElement>
}) {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (onClick)
      onClick(event);
  }

  return (
    <div className="flex justify-center items-center w-full h-[55px] shadow-[0_4px_4px_rgba(0,0,0,0.1)] rounded-[25px]" style={{ backgroundColor: backgroundColor }} onClick={(e: MouseEvent<HTMLElement>) => handleClick(e)}>
      <p className="font-semibold text-lg leading-[27px] text-white">{title}</p>
    </div>
  );
}