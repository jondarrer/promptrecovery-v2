import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { getPictureAsImage } from '@/lib/pictures';
import { getPostContent, getPostSlugs } from '@/lib/posts';

import { mdxComponents } from '../../../../mdx-components';
import { seo } from '../../data/index';
import { baseOpenGraph } from '../../layout';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostContent(slug);
  const image = getPictureAsImage(meta.imageIndex, 1);

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${seo.url}/blog/${slug}/` },
    openGraph: { ...baseOpenGraph, url: `${seo.url}/blog/${slug}/`, images: [image] },
    twitter: {
      card: 'summary_large_image',
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  if (!getPostSlugs().includes(slug)) {
    notFound();
  }

  const { meta, content } = getPostContent(slug);
  const image450 = getPictureAsImage(meta.imageIndex, 1);
  const image200 = getPictureAsImage(meta.imageIndex, 2);

  // Absolute image URL for structured data (always uses the canonical domain).
  const schemaImageUrl = `${seo.url}${image200.url}`;
  const canonicalUrl = `${seo.url}/blog/${slug}/`;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    image: schemaImageUrl,
    author: {
      '@type': 'Person',
      name: meta.author,
    },
    publisher: {
      '@type': 'LocalBusiness',
      name: seo.businessName,
      url: seo.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${seo.url}/blog/` },
      { '@type': 'ListItem', position: 3, name: meta.title },
    ],
  };

  return (
    <div className="mx-auto max-w-340 px-4 py-10 pt-42 sm:px-6 lg:px-8 lg:py-14 lg:pt-42">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mx-auto max-w-2xl">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog/" className="hover:text-brand">
            Blog
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-700" aria-current="page">
            {meta.title}
          </span>
        </nav>

        <article>
          <header className="mb-8 border-b border-gray-200 pb-8">
            <h1 className="text-heading text-3xl leading-tight font-bold md:text-4xl">{meta.title}</h1>
            <p className="mt-3 text-lg text-gray-600">{meta.description}</p>
            <p className="mt-3 text-sm text-gray-500">
              By {meta.author} &middot;{' '}
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            </p>
            <Image
              className="rounded-base mt-4 h-auto w-full"
              width={image450.width}
              height={image450.height}
              src={image450.url}
              alt={image450.description}
            />
          </header>

          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}
