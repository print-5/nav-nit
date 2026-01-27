import { use } from 'react'
import AddEditVendor from '@/components/AdminDashboard/Vendors/AddEditVendor'

interface EditVendorPageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditVendorPage({ params }: EditVendorPageProps) {
  const { id } = use(params)
  return <AddEditVendor vendorId={id} mode="edit" />
}