import { TSymbolIcon, PlayIcon, PauseIcon, PSymbolIcon } from '@/assets/images';

export const Logo = () => {
  return (
    <div className="flex justify-center">
      <img
        src={TSymbolIcon}
        alt=""
        className="mr-[10px]"
      />
      <img
        src={PlayIcon}
        alt=""
        className="mr-[3px]"
      />
      <img
        src={PauseIcon}
        alt=""
        className="mr-[15px]"
      />
      <img
        src={PSymbolIcon}
        alt=""
      />
    </div>
  );
};
