import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import UsersStats from '@/components/AdminDashboard/Users/UsersStats'
import UsersTable from '@/components/AdminDashboard/Users/UsersTable'
import UsersActions from '@/components/AdminDashboard/Users/UsersActions'

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Action Button */}
      <UsersActions />

      {/* Users Stats */}
      <UsersStats
        totalUsers={8945}
        newThisMonth={1234}
        activeToday={2456}
      />

      {/* Users Table */}
      <UsersTable />
    </div>
  )
}