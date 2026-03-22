import type { Metadata } from 'next';
import Image from 'next/image';
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
  const image = getPictureAsImage(meta.imageIndex, 2);

  return (
    <div className="mx-auto max-w-340 px-4 py-10 pt-42 sm:px-6 lg:px-8 lg:py-14 lg:pt-42">
      <article className="mx-auto max-w-2xl">
        <header className="mb-8 border-b border-gray-200 pb-8">
          <time className="text-sm text-gray-500">
            {new Date(meta.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <h1 className="text-heading mt-2 text-3xl leading-tight font-bold md:text-4xl">{meta.title}</h1>
          <p className="mt-3 text-lg text-gray-600">{meta.description}</p>
          {image && (
            <Image
              className="rounded-base mt-3 h-auto w-full"
              width={image.width}
              height={image.height}
              src={image.url}
              alt={image.description}
            />
          )}
        </header>

        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </div>
  );
}
