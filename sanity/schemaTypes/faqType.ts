import { FaQuestion } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQs',
  icon: FaQuestion,
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      question: 'question',
      answer: 'answer',
    },
    prepare({ question, answer }) {
      const questionFormatted = question
        ? `${question.slice(0, 15)}...`
        : 'No question';
      const answerFormatted = answer
        ? `${answer.slice(0, 10)}...`
        : 'No Answer';

      return {
        title: questionFormatted,
        subtitle: answerFormatted,
      };
    },
  },
});
