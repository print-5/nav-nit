'use client';

import { use } from 'react';
import AddProduct from '@/components/VendorDashboard/Products/AddEditProduct';

interface EditProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const { id } = use(params);
  return <AddProduct productId={id} isEdit={true} />;
}

