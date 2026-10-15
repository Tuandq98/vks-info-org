import React from 'react';
import NewsDetailClient from './NewsDetailClient';
import { mockArticles } from '@/data/mockNews';

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  mockArticles.forEach((article) => {
    params.push({ id: article.id });
    if (article.slug && article.slug !== article.id) {
      params.push({ id: article.slug });
    }
  });
  return params;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <NewsDetailClient articleId={resolvedParams.id} />;
}
