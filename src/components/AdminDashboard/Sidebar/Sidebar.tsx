'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Settings,
  Store,
  Tags,
  MessageSquare,
  FileText,
  Shield,
  LogOut,
  Warehouse,
  Receipt,
  Edit3
} from 'lucide-react'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: 'admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Vendors',
    href: 'admin/dashboard/vendors',
    icon: Store,
  },
  {
    title: 'Products',
    href: 'admin/dashboard/products',
    icon: Package,
  },
  {
    title: 'Inventory',
    href: 'admin/dashboard/inventory',
    icon: Warehouse,
  },
  {
    title: 'Orders',
    href: 'admin/dashboard/orders',
    icon: ShoppingCart,
  },
  {
    title: 'Invoice & Billing',
    href: 'admin/dashboard/billing',
    icon: Receipt,
  },
  {
    title: 'Categories',
    href: 'admin/dashboard/categories',
    icon: Tags,
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    title: 'Content Management',
    href: 'admin/dashboard/cms',
    icon: Edit3,
  },
  {
    title: 'Reviews',
    href: 'admin/dashboard/reviews',
    icon: MessageSquare,
  },
  {
    title: 'Reports',
    href: 'admin/dashboard/reports',
    icon: FileText,
  },
  {
    title: 'Admin Management',
    href: 'admin/dashboard/admins',
    icon: Shield,
  },
  {
    title: 'Settings',
    href: 'admin/dashboard/settings',
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col font-sans bg-white border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="flex h-18 items-center justify-center border-b border-gray-200 px-4 bg-gray-50">
        <Link href="/dashboard" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="h-9 w-9 rounded-lg bg-[#222222] flex items-center justify-center shadow-md">
            <span className="text-white text-base font-bold">A</span>
          </div>
          <div>
            <span className="text-lg font-bold text-[#222222] block">Admin Panel</span>
            <span className="text-xs text-slate-500">Control Center</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                isActive
                  ? 'bg-[#222222] text-white shadow-md'
                  : 'text-slate-700 hover:bg-gray-50 hover:text-[#222222]'
              )}
            >
              <Icon
                className={cn(
                  'mr-3 h-5 w-5 shrink-0',
                  isActive ? 'text-white' : 'text-slate-600'
                )}
              />
              <span className="font-semibold">{item.title}</span>
            </Link>
          )
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-[#222222] flex items-center justify-center shadow-md">
            <span className="text-sm font-semibold text-white">SA</span>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold text-[#222222]">Super Admin</p>
            <p className="text-xs text-slate-500">admin@example.com</p>
          </div>
        </div>
        <button className="mt-3 flex w-full items-center px-3 py-2 text-sm font-medium text-[#222222] rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">
          <LogOut className="mr-3 h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  )
}