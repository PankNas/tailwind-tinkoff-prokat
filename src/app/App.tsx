import { Footer, Logo } from '@/widgets/ui';

export const App = () => {
  return (
    <main className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <Logo />
      <div className="grow">hello world</div>
      <Footer />
    </main>
  );
};
