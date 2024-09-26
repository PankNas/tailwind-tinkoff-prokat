import { Footer, Logo, Search, History } from '@/widgets/ui';

const history = [
  {
    id: 1,
    text: 'Как я встретил мамку',
  },
  {
    id: 2,
    text: 'Гоп-стоп',
  },
  {
    id: 3,
    text: 'Весенний дрозд',
  },
  {
    id: 4,
    text: 'Как я встретил мамку',
  },
  {
    id: 5,
    text: 'Как я встретил мамку',
  },
  {
    id: 6,
    text: 'Как я встретил мамку',
  },
  {
    id: 7,
    text: 'Как я встретил мамку',
  },
  {
    id: 8,
    text: 'Как я встретил мамку',
  },
];

export const App = () => {
  return (
    <main className="max-w-7xl mx-auto flex flex-col min-h-screen gap-12">
      <Logo />

      <div className="grow flex flex-col items-center">
        <Search />
        <History
          data={history}
          className="mt-6"
        />
      </div>

      <Footer />
    </main>
  );
};
