import ClientToaster from '@/components/ClientToaster';
import Footer from '@/components/Footer';

export default function frontendLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      {children}
      <Footer />

      <ClientToaster />
    </main>
  );
}
