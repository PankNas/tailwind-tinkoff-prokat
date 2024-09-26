import { TSymbolIcon, PlayIcon, PauseIcon, PSymbolIcon } from '@/assets/images';

export const Logo = () => {
  return (
    <div className="flex justify-center pt-20">
      <img
        src={TSymbolIcon}
        alt=""
        className="mr-3"
      />
      <img
        src={PlayIcon}
        alt=""
        className="mr-1"
      />
      <img
        src={PauseIcon}
        alt=""
        className="mr-3"
      />
      <img
        src={PSymbolIcon}
        alt=""
      />
    </div>
  );
};
