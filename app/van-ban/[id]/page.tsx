import React from 'react';
import DocumentDetailClient from './DocumentDetailClient';
import { mockDocuments } from '@/data/mockDocuments';

export async function generateStaticParams() {
  return mockDocuments.map((doc) => ({
    id: doc.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DocumentDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <DocumentDetailClient docId={resolvedParams.id} />;
}
