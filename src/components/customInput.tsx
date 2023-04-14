import { HTMLInputTypeAttribute, MouseEventHandler, MouseEvent } from 'react';

export default function CustomInput({
  type,
  defaultValue = '',
  placeholder,
  isError,
  errorMessage,
  isAction,
  actionTitle,
  onClickAction
}: {
  type: HTMLInputTypeAttribute,
  defaultValue?: string,
  placeholder: string,
  isError?: boolean,
  errorMessage?: string,
  isAction?: boolean,
  actionTitle?: string,
  onClickAction?: MouseEventHandler<HTMLElement>
}) {
  const handleActionClick = (event: MouseEvent<HTMLElement>) => {
    if (onClickAction) {
      onClickAction(event);
    }
  }

  return (
    <div className="flex flex-col gap-1 w-full mt-[30px]">
      <div className="relative">
        <input type={type} className="w-full h-[60px] px-[22px] font-medium text-lg leading-[27px] text-black bg-[#FAFBFB] border-[0.5px] shadow-[0_4px_4px_rgba(25,28,50,0.1)] rounded-[15px] placeholder:font-medium placeholder:text-lg placeholder:leading-[27px] placeholder:text-[#CACACA]" defaultValue={defaultValue} placeholder={placeholder} style={{ borderColor: isError ? '#F04949' : '#BEBEBE' }} />
        <div className="absolute top-3 right-2.5 flex items-center px-[11px] py-[7px] bg-[#42CBB4] shadow-[0_20px_30px_rgba(25,28,50,0.1)] rounded-[15px]" style={{ display: isAction ? 'flex' : 'none' }} onClick={(e: MouseEvent<HTMLElement>) => handleActionClick(e)}>
          <p className="font-semibold text-sm leading-[21px] text-white">{actionTitle}</p>
        </div>
      </div>
      <div className="flex px-2.5" style={{ display: isError ? 'flex' : 'none' }}>
        <p className="font-medium text-base leading-6 text-[#F04949]">{errorMessage}</p>
      </div>
    </div>
  );
}