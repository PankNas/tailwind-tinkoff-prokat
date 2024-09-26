import { SearchIcon } from '@/assets/images';

export const Search = () => {
  return (
    <div className="border-b-2 w-[628px] flex gap-2 items-center py-[18px] px-[71px]">
      <img
        src={SearchIcon}
        alt="Поиск"
      />
      <input
        type="text"
        placeholder="Поиск фильмов по жанрам и актёрам"
        className="bg-transparent w-full focus:outline-none text-white text-2xl"
      />
    </div>
  );
};
