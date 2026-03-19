import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { Carousel } from '@/components/carousel';
import { ReviewCardV2 } from '@/components/review-card-v2';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { ContactForm } from '@/components/contact-form';
import { GoogleMap } from '@/components/google-map';
import { ServiceItem } from '@/components/service-item';

import { googleReviews, services, reasonsToChooseNick, seo } from './data/index';

import { basePath } from './base-path';
import config from './config';

// Page-level metadata overrides the defaults set in layout.tsx.
// This page's browser tab will read: "Home | Prompt Recovery"
export const metadata: Metadata = {
  title: 'Home',
  openGraph: {
    url: seo.url,
  },
};

// This is the home page, rendered at the root path `/`.
// Replace this placeholder with real content as the site is built out.
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      {/*-- Hero --*/}
      <div className="relative bg-linear-to-bl from-primary-100 via-transparent dark:from-primary-950 dark:via-transparent bg-light-grey">
        <div className="max-w-7xl pt-42 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-36 mx-auto">
          {/*-- Grid --*/}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              {/*-- Title --*/}
              <div className="mt-4 md:mb-12">
                <h1 className="mb-4 font-semibold text-foreground text-4xl lg:text-5xl">
                  Roadside recovery you can rely on
                </h1>
                <h2 className="mb-4 font-normal text-foreground text-2xl lg:text-3xl">
                  Serving Watford and the surrounding areas
                </h2>
                <p className="text-muted-foreground-2 text-xl font-light">
                  Fast, friendly and affordable help for vehicles under 4 tonnes
                </p>
              </div>
              {/*-- End Title --*/}
            </div>

            <div>
              {/*-- Carousel --*/}
              <Carousel>
                {googleReviews.reviews.map((review) => (
                  <ReviewCardV2 key={review.publishTime} review={review} />
                ))}
              </Carousel>
              {/*-- End Carousel --*/}
            </div>
          </div>
          {/*-- End Grid --*/}
        </div>
      </div>
      {/*-- End Hero --*/}
      {/* About Section */}
      <Section classNames="bg-light-yellow">
        <div className="max-w-7xl pt-36 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-18 mx-auto">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <SectionHeading sectionName="About" />
              <p className="text-xl font-light">
                Prompt Recovery Ltd is a locally trusted roadside recovery company based in Watford. With experience and
                a commitment to fast, reliable service, we're the first call you make when you're stuck.
              </p>
              <p className="mt-8">
                <Link
                  href="/about"
                  className="hidden xs:inline text-navy font-normal leading-5 text-xl hover:underline underline-navy underline-offset-4"
                >
                  Learn more about us
                </Link>
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
      </Section>
      {/* End About Section */}
      {/* Contact Form Section */}
      <Section>
        <div className="max-w-7xl pt-36 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-18 mx-auto">
          <SectionHeading sectionName="Request a quote" />
          <ContactForm action={config.form.action} accessKey={config.form.accessKey} />
        </div>
      </Section>
      {/* End Contact Form Section */}
      {/* Services Section */}
      <Section classNames="bg-light-grey">
        <div className="max-w-7xl pt-36 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-18 mx-auto">
          <SectionHeading sectionName="Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            {services.map((service) => (
              <ServiceItem key={service.name} service={service} />
            ))}
          </div>
        </div>
      </Section>
      {/* End Services Section */}
      {/* Why Choose Us Section */}
      <Section classNames="bg-light-grey">
        <div className="max-w-7xl pt-36 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-18 mx-auto">
          <SectionHeading sectionName="Why choose us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            {reasonsToChooseNick.map((reason) => (
              <ServiceItem key={reason.name} service={reason} />
            ))}
          </div>
        </div>
      </Section>
      {/* End Why Choose Us Section */}
      {/* Find Us Section */}
      <Section>
        <div className="max-w-7xl pt-36 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:pt-18 mx-auto">
          <SectionHeading sectionName="Find us" />
          <h3 className="text-xl text-center font-thin mb-8">We operate throughout Watford and surrounding areas.</h3>
          <GoogleMap />
        </div>
      </Section>
      {/* End Find Us Section */}
    </main>
  );
}
