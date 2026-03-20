import type { Metadata } from 'next';

import { ServiceItem } from '@/components/service-item';
import { PageHeader } from '@/components/page-header';
import { services, seo } from '../data/index';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Breakdown towing, motorway recovery, van recovery, stuck vehicle recovery, and more. Safe, fast, and affordable — serving Watford and surrounding areas.',
  openGraph: {
    url: `${seo.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-42 lg:pt-42">
        <PageHeader
          title="The services that we offer"
          subtitle="We provide safe, fast, and affordable towing for cars and vans that can't be driven — whether you're at home, at work, or stuck after a breakdown."
        />

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          {services.map((service) => (
            <ServiceItem key={service.name} service={service} />
          ))}
        </div>
      </div>
    </>
  );
}
