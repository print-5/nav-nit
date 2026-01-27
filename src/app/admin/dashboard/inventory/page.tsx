import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import InventoryStats from '@/components/AdminDashboard/Inventory/InventoryStats'
import InventoryTable from '@/components/AdminDashboard/Inventory/InventoryTable'
import InventoryActions from '@/components/AdminDashboard/Inventory/InventoryActions'

const inventoryItems = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    sku: 'IPH15P-128-BLK',
    category: 'Electronics',
    currentStock: 45,
    minStock: 10,
    maxStock: 100,
    status: 'in_stock',
    lastRestocked: '2024-01-10',
    vendor: 'TechStore Pro',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    sku: 'SGS24-256-WHT',
    category: 'Electronics',
    currentStock: 5,
    minStock: 10,
    maxStock: 80,
    status: 'low_stock',
    lastRestocked: '2024-01-08',
    vendor: 'ElectroHub',
  },
  {
    id: 3,
    name: 'Nike Air Max 270',
    sku: 'NAM270-42-BLK',
    category: 'Fashion',
    currentStock: 0,
    minStock: 5,
    maxStock: 50,
    status: 'out_of_stock',
    lastRestocked: '2024-01-05',
    vendor: 'Sports Galaxy',
  },
  {
    id: 4,
    name: 'MacBook Pro 16"',
    sku: 'MBP16-512-SLV',
    category: 'Electronics',
    currentStock: 25,
    minStock: 5,
    maxStock: 30,
    status: 'in_stock',
    lastRestocked: '2024-01-12',
    vendor: 'TechStore Pro',
  },
]

export default function InventoryPage() {
  const inventoryItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'IPH15P-128-BLK',
      category: 'Electronics',
      currentStock: 45,
      minStock: 10,
      maxStock: 100,
      status: 'in_stock' as const,
      lastRestocked: '2024-01-10',
      vendor: 'TechStore Pro',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SGS24-256-WHT',
      category: 'Electronics',
      currentStock: 5,
      minStock: 10,
      maxStock: 80,
      status: 'low_stock' as const,
      lastRestocked: '2024-01-08',
      vendor: 'ElectroHub',
    },
    {
      id: 3,
      name: 'Nike Air Max 270',
      sku: 'NAM270-42-BLK',
      category: 'Fashion',
      currentStock: 0,
      minStock: 5,
      maxStock: 50,
      status: 'out_of_stock' as const,
      lastRestocked: '2024-01-05',
      vendor: 'Sports Galaxy',
    },
    {
      id: 4,
      name: 'MacBook Pro 16"',
      sku: 'MBP16-512-SLV',
      category: 'Electronics',
      currentStock: 25,
      minStock: 5,
      maxStock: 30,
      status: 'in_stock' as const,
      lastRestocked: '2024-01-12',
      vendor: 'TechStore Pro',
    },
  ]

  const totalItems = inventoryItems.length
  const lowStockItems = inventoryItems.filter(item => item.currentStock <= item.minStock && item.currentStock > 0).length
  const outOfStockItems = inventoryItems.filter(item => item.currentStock === 0).length
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * 100), 0) // Assuming $100 per item for demo

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Action Button */}
      <InventoryActions />

      {/* Inventory Stats */}
      <InventoryStats
        totalItems={totalItems}
        lowStockItems={lowStockItems}
        outOfStockItems={outOfStockItems}
        totalValue={totalValue}
      />

      {/* Inventory Table */}
      <InventoryTable items={inventoryItems} />
    </div>
  )
}