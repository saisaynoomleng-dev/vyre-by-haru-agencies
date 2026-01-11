import { sanityFetch } from '@/sanity/lib/live';
import { ALL_FAQS_QUERY } from '@/sanity/lib/queries';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import clsx from 'clsx';

const FAQ = async ({ className }: { className?: string }) => {
  const { data: FAQs } = await sanityFetch({ query: ALL_FAQS_QUERY });
  return (
    <div className={clsx('grid md:grid-cols-2', className)}>
      <h3 className="font-semibold text-fs-500 md:text-fs-600">FAQ.</h3>

      <Accordion type="single" collapsible className="w-full">
        <div>
          {FAQs.map((faq, i) => (
            <AccordionItem key={i} value={`${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default FAQ;
