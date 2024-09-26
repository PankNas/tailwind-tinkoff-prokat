import { FC } from 'react';

type HistoryProps = {
  data: {
    id: number;
    text: string;
  }[];
  className?: string;
};

export const History: FC<HistoryProps> = ({ data, className }) => {
  return (
    <ul className={`flex gap-2 flex-wrap ${className}`}>
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className="bg-white/80 text-black-900 px-4 py-[6px] rounded">
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};
