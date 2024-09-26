import { Footer, Logo } from '@/widgets/ui';
import { Search } from '@/widgets/ui/search';

export const App = () => {
  return (
    <main className="max-w-7xl mx-auto flex flex-col min-h-screen gap-12">
      <Logo />

      <div className="grow mx-auto">
        <Search />
      </div>

      <Footer />
    </main>
  );
};
