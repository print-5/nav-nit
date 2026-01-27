import  ProductsTable  from '@/components/AdminDashboard/Products/ProductsTable'
import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import { Button } from '@/components/UI/Button'
import { Plus } from 'lucide-react'

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <Breadcrumb />
      {/* Products Table */}
      <ProductsTable />
    </div>
  )
}