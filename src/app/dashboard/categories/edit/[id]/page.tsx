import { use } from 'react'
import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import AddEditCategory from '@/components/AdminDashboard/Categories/AddEditCategory'

interface EditCategoryPageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditCategoryPage({ params }: EditCategoryPageProps) {
  const { id } = use(params)
  
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />
      
      {/* Edit Category Form */}
      <AddEditCategory categoryId={id} isEdit={true} />
    </div>
  )
}