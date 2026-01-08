import Bounded from '@/components/Bounded';
import SocialLinks from '@/components/SocialLinks';
import { Metadata } from 'next';
import ContactForm from './sections/ContactForm';
import FAQ from '@/components/FAQ';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const ContactPage = () => {
  return (
    <Bounded>
      <div className="grid md:grid-cols-2 md:gap-x-5 gap-y-3">
        <div className="flex flex-col gap-y-4">
          <p className="font-chivo-mono">Get in touch</p>
          <SectionTitle className="text-center md:text-left">
            Got a project in mind? Let&apos;s chat and bring it to life.
          </SectionTitle>
        </div>

        <SocialLinks className="place-self-end" />
      </div>

      <ContactForm />

      <FAQ />
    </Bounded>
  );
};

export default ContactPage;
