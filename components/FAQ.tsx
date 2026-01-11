import { sanityFetch } from '@/sanity/lib/live';
import { ALL_FAQS_QUERY } from '@/sanity/lib/queries';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { SlideInAnimation, SlideInAnimationGroup } from './Animations';

const FAQ = async () => {
  const { data: FAQs } = await sanityFetch({ query: ALL_FAQS_QUERY });
  return (
    <div className="grid md:grid-cols-2">
      <SlideInAnimation direction="left">
        <h3 className="font-semibold text-fs-500 md:text-fs-600">FAQ.</h3>
      </SlideInAnimation>

      <Accordion type="single" collapsible className="w-full">
        <SlideInAnimationGroup direction="top">
          {FAQs.map((faq, i) => (
            <AccordionItem key={i} value={`${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </SlideInAnimationGroup>
      </Accordion>
    </div>
  );
};

export default FAQ;
