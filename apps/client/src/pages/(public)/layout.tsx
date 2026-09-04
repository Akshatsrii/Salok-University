import { PublicNavbar } from '../../components/public/PublicNavbar';
import { Footer } from '../../components/public/Footer';
import { AIChatWidget } from '../../components/shared/AIChatWidget';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <PublicNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
