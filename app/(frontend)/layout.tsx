import ClientToaster from '@/components/ClientToaster';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function frontendLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="lg:max-w-300 mx-auto">
      <Header />
      {children}
      <Footer />

      <ClientToaster />
    </main>
  );
}
