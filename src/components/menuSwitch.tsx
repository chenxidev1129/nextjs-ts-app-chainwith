import { useState } from 'react';

export default function MenuSwitch({
  trueTitle,
  falseTitle,
  onChange
}: {
  trueTitle: string,
  falseTitle: string,
  onChange: (result: boolean) => void
}) {
  const [menuState, setMenuState] = useState(true);

  const handleChange = (result: boolean) => {
    setMenuState(result);

    if (onChange) {
      onChange(result);
    }
  };

  return (
    <div className="flex w-full bg-[#EBEFF1] rounded-full p-1">
      {/* Activated Button */}
      <div className="flex justify-center items-center rounded-full flex-1 py-[14px]" style={menuState ? { backgroundColor: '#ffffffcc', boxShadow: '0px 20px 40px rgba(55, 62, 125, 0.1)' } : {}} onClick={() => handleChange(true)}>
        <p className="text-sm leading-[21px]" style={{ fontWeight: menuState ? 600 : 500, color: menuState ? '#191C32' : '#9395A5' }}>{trueTitle}</p>
      </div>
      {/* Default Button */}
      <div className="flex justify-center items-center rounded-full flex-1 py-[14px]" style={!menuState ? { backgroundColor: '#ffffffcc', boxShadow: '0px 20px 40px rgba(55, 62, 125, 0.1)' } : {}} onClick={() => handleChange(false)}>
        <p className="text-sm leading-[21px]" style={{ fontWeight: !menuState ? 600 : 500, color: !menuState ? '#191C32' : '#9395A5' }}>{falseTitle}</p>
      </div>
    </div>
  );
}