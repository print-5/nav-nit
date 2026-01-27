import AddEditProduct from '@/components/AdminDashboard/Products/AddEditProduct'
import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'

export default function AddProductPage() {
  return (
    <div className="space-y-6">
      <Breadcrumb />
      <AddEditProduct />
    </div>
  )
}