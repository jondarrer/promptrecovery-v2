import type { Metadata } from 'next';

import { FaqItem } from '@/components/faq-item';
import { PageHeader } from '@/components/page-header';
import { faqs, seo } from '../data/index';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Got a question before booking? Find answers to the most common questions about our vehicle recovery services in Watford and surrounding areas.',
  openGraph: {
    url: `${seo.url}/faqs`,
  },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      {/* FAQ */}
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-42 lg:pt-42">
        <PageHeader
          title="Frequently asked questions"
          subtitle="Got a question before booking? Here are answers to the most common things customers ask about our vehicle recovery services in Watford and the surrounding area."
        />

        <div className="max-w-2xl mx-auto divide-y divide-line-2">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
      {/* End FAQ */}
    </>
  );
}
