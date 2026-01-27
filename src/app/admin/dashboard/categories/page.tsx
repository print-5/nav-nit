import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import CategoryLists from '@/components/AdminDashboard/Categories/CategoryLists'

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />
      
      {/* Categories Management */}
      <CategoryLists />
    </div>
  )
}