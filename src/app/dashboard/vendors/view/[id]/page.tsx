import { use } from 'react'
import VendorView from '@/components/AdminDashboard/Vendors/VendorView'

interface ViewVendorPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ViewVendorPage({ params }: ViewVendorPageProps) {
  const { id } = use(params)
  return <VendorView vendorId={id} />
}