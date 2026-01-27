import DashboardStats from '@/components/AdminDashboard/Dashboard/DashboardStats'
import RecentActivity from '@/components/AdminDashboard/Dashboard/RecentActivity'
import VendorsTable from '@/components/AdminDashboard/Vendors/VendorsTable'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {/* Stats Cards */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>

          {/* Vendors Table */}
          <div className="lg:col-span-2">
            <VendorsTable />
          </div>
        </div>
      </div>
    </div>
  )
}