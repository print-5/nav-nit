'use client'

import { use } from 'react'
import AddEditProduct from '@/components/AdminDashboard/Products/AddEditProduct'
import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'

interface EditProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const { id } = use(params)

  return (
    <div className="space-y-6">
      <Breadcrumb />
      <AddEditProduct productId={id} isEdit={true} />
    </div>
  )
}