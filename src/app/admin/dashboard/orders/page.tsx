import OrdersTable from '@/components/AdminDashboard/Dashboard/OrdersTable'
import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import OrdersActions from '@/components/AdminDashboard/Orders/OrdersActions'

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Action Buttons */}
      <OrdersActions />

      {/* Orders Table */}
      <OrdersTable />
    </div>
  )
}