export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white/40 text-center pb-4 shrink">
      © {currentYear} Тинькофф Прокат
    </footer>
  );
};
