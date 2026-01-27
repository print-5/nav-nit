import VendorsTable from '@/components/AdminDashboard/Vendors/VendorsTable'
import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import { Button } from '@/components/UI/Button'
import { Plus } from 'lucide-react'

export default function VendorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
          <Breadcrumb />
      </div>

      {/* Vendors Table */}
      <VendorsTable />
    </div>
  )
}