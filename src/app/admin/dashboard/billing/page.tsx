import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import BillingStats from '@/components/AdminDashboard/Billing/BillingStats'
import InvoicesTable from '@/components/AdminDashboard/Billing/InvoicesTable'
import BillingActions from '@/components/AdminDashboard/Billing/BillingActions'

const invoices = [
  {
    id: 'INV-2024-001',
    vendorName: 'TechStore Pro',
    vendorEmail: 'billing@techstore.com',
    amount: 2450.00,
    status: 'paid',
    dueDate: new Date('2024-01-20'),
    issueDate: new Date('2024-01-05'),
    items: 5,
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'INV-2024-002',
    vendorName: 'ElectroHub',
    vendorEmail: 'finance@electrohub.com',
    amount: 1890.50,
    status: 'pending',
    dueDate: new Date('2024-01-25'),
    issueDate: new Date('2024-01-10'),
    items: 3,
    paymentMethod: 'Credit Card',
  },
  {
    id: 'INV-2024-003',
    vendorName: 'Sports Galaxy',
    vendorEmail: 'accounts@sportsgalaxy.com',
    amount: 3200.00,
    status: 'overdue',
    dueDate: new Date('2024-01-15'),
    issueDate: new Date('2024-01-01'),
    items: 8,
    paymentMethod: 'PayPal',
  },
  {
    id: 'INV-2024-004',
    vendorName: 'Fashion Forward',
    vendorEmail: 'billing@fashionforward.com',
    amount: 1567.25,
    status: 'draft',
    dueDate: new Date('2024-01-30'),
    issueDate: new Date('2024-01-12'),
    items: 4,
    paymentMethod: 'Bank Transfer',
  },
]

export default function BillingPage() {
  const invoices = [
    {
      id: 'INV-2024-001',
      vendorName: 'TechStore Pro',
      vendorEmail: 'billing@techstore.com',
      amount: 2450.00,
      status: 'paid' as const,
      dueDate: new Date('2024-01-20'),
      issueDate: new Date('2024-01-05'),
      items: 5,
      paymentMethod: 'Bank Transfer',
    },
    {
      id: 'INV-2024-002',
      vendorName: 'ElectroHub',
      vendorEmail: 'finance@electrohub.com',
      amount: 1890.50,
      status: 'pending' as const,
      dueDate: new Date('2024-01-25'),
      issueDate: new Date('2024-01-10'),
      items: 3,
      paymentMethod: 'Credit Card',
    },
    {
      id: 'INV-2024-003',
      vendorName: 'Sports Galaxy',
      vendorEmail: 'accounts@sportsgalaxy.com',
      amount: 3200.00,
      status: 'overdue' as const,
      dueDate: new Date('2024-01-15'),
      issueDate: new Date('2024-01-01'),
      items: 8,
      paymentMethod: 'PayPal',
    },
    {
      id: 'INV-2024-004',
      vendorName: 'Fashion Forward',
      vendorEmail: 'billing@fashionforward.com',
      amount: 1567.25,
      status: 'draft' as const,
      dueDate: new Date('2024-01-30'),
      issueDate: new Date('2024-01-12'),
      items: 4,
      paymentMethod: 'Bank Transfer',
    },
  ]

  const totalRevenue = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0)
  const pendingAmount = invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0)
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0)
  const totalInvoices = invoices.length

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Action Buttons */}
      <BillingActions />

      {/* Billing Stats */}
      <BillingStats
        totalRevenue={totalRevenue}
        pendingAmount={pendingAmount}
        overdueAmount={overdueAmount}
        totalInvoices={totalInvoices}
      />

      {/* Invoices Table */}
      <InvoicesTable invoices={invoices} />
    </div>
  )
}