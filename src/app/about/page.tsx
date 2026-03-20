import type { Metadata } from 'next';
import Image from 'next/image';

import { pictures, values, seo } from '../data/index';
import { basePath } from '../base-path';
import { GridGallery } from '@/components/grid-gallery';
import { PageHeader } from '@/components/page-header';
import { SectionHeading } from '@/components/section-heading';
import { ServiceItem } from '@/components/service-item';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Nick — founder of Prompt Recovery Ltd, with 20+ years of professional driving experience. Trusted, local roadside recovery in Watford and nearby areas.',
  openGraph: {
    url: `${seo.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* About */}
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-42 lg:pt-42">
        <PageHeader
          title="Meet Prompt Recovery — Watford's trusted recovery specialist"
          subtitle="Prompt Recovery Ltd was built on one mission: to provide fast, friendly and reliable roadside recovery across Watford and nearby areas. Get to know the person behind the wheel and what drives our services."
        />

        <div className="max-w-7xl pt-4 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-4 mx-auto">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <SectionHeading sectionName="Hi, I'm Nick - Founder of Prompt Recovery" />
              <p className="text-thin font-light">
                I have over 20 years of experience as a professional truck driver, and I've built this business to offer
                fast, honest, and reliable towing for inoperable vehicles. I recover cars, SUVs, and small vans (under 4
                tonnes) across Watford, Bushey, Rickmansworth, and nearby areas. Whether it's a breakdown, accident, or
                stuck vehicle, I'll handle it with care, like I'm helping a neighbour.
              </p>
              <p className="text-thin font-light">
                I'm local to Watford, and I treat every call like I'm helping a neighbour because most of the time, I
                am.
              </p>
            </div>
            <Image
              src={`${basePath}/images/image2-1185x593.jpg`}
              width={1185}
              height={593}
              className="rounded-base"
              alt="Nick, founder of Prompt Recovery"
            />
          </div>
        </div>

        <div className="max-w-7xl pt-4 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-4 mx-auto">
          <div>
            <SectionHeading sectionName="Our values" />

            <div className="grid sm:grid-cols-1 lg:grid-cols-4 items-center gap-6">
              {values.map((value) => (
                <ServiceItem key={value.name} service={value} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <SectionHeading sectionName="Some of our recoveries" />
          <GridGallery items={pictures} />
        </div>
      </div>
      {/* End About */}
    </>
  );
}
