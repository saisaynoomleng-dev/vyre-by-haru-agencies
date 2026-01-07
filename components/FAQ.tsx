import { sanityFetch } from '@/sanity/lib/live';
import { ALL_FAQS_QUERY } from '@/sanity/lib/queries';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = async () => {
  const { data: FAQs } = await sanityFetch({ query: ALL_FAQS_QUERY });
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <h3 className="font-semibold text-fs-500 md:text-fs-600">FAQ.</h3>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {FAQs.map((faq, i) => (
            <AccordionItem key={i} value={`${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
