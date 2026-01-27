import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import CMSStats from '@/components/AdminDashboard/CMS/CMSStats'
import ContentTable from '@/components/AdminDashboard/CMS/ContentTable'
import CMSActions from '@/components/AdminDashboard/CMS/CMSActions'
import QuickActions from '@/components/AdminDashboard/CMS/QuickActions'

const contentItems = [
  {
    id: 1,
    title: 'Welcome to Our Marketplace',
    type: 'page',
    status: 'published',
    author: 'Admin',
    lastModified: new Date('2024-01-15'),
    views: 1250,
    slug: '/welcome',
  },
  {
    id: 2,
    title: 'How to Become a Vendor',
    type: 'article',
    status: 'published',
    author: 'Content Team',
    lastModified: new Date('2024-01-12'),
    views: 890,
    slug: '/guides/become-vendor',
  },
  {
    id: 3,
    title: 'Platform Terms & Conditions',
    type: 'page',
    status: 'draft',
    author: 'Legal Team',
    lastModified: new Date('2024-01-10'),
    views: 0,
    slug: '/terms-conditions',
  },
  {
    id: 4,
    title: 'Product Photography Guidelines',
    type: 'article',
    status: 'published',
    author: 'Marketing Team',
    lastModified: new Date('2024-01-08'),
    views: 567,
    slug: '/guides/photography',
  },
  {
    id: 5,
    title: 'Holiday Sale Banner',
    type: 'media',
    status: 'published',
    author: 'Design Team',
    lastModified: new Date('2024-01-05'),
    views: 2340,
    slug: '/media/holiday-banner',
  },
  {
    id: 6,
    title: 'Platform Introduction Video',
    type: 'media',
    status: 'published',
    author: 'Video Team',
    lastModified: new Date('2024-01-03'),
    views: 1890,
    slug: '/media/intro-video',
  },
]

export default function CMSPage() {
  const contentItems = [
    {
      id: 1,
      title: 'Welcome to Our Marketplace',
      type: 'page' as const,
      status: 'published' as const,
      author: 'Admin',
      lastModified: new Date('2024-01-15'),
      views: 1250,
      slug: '/welcome',
    },
    {
      id: 2,
      title: 'How to Become a Vendor',
      type: 'article' as const,
      status: 'published' as const,
      author: 'Content Team',
      lastModified: new Date('2024-01-12'),
      views: 890,
      slug: '/guides/become-vendor',
    },
    {
      id: 3,
      title: 'Platform Terms & Conditions',
      type: 'page' as const,
      status: 'draft' as const,
      author: 'Legal Team',
      lastModified: new Date('2024-01-10'),
      views: 0,
      slug: '/terms-conditions',
    },
    {
      id: 4,
      title: 'Product Photography Guidelines',
      type: 'article' as const,
      status: 'published' as const,
      author: 'Marketing Team',
      lastModified: new Date('2024-01-08'),
      views: 567,
      slug: '/guides/photography',
    },
    {
      id: 5,
      title: 'Holiday Sale Banner',
      type: 'media' as const,
      status: 'published' as const,
      author: 'Design Team',
      lastModified: new Date('2024-01-05'),
      views: 2340,
      slug: '/media/holiday-banner',
    },
    {
      id: 6,
      title: 'Platform Introduction Video',
      type: 'media' as const,
      status: 'published' as const,
      author: 'Video Team',
      lastModified: new Date('2024-01-03'),
      views: 1890,
      slug: '/media/intro-video',
    },
  ]

  const totalContent = contentItems.length
  const publishedContent = contentItems.filter(item => item.status === 'published').length
  const draftContent = contentItems.filter(item => item.status === 'draft').length
  const totalViews = contentItems.reduce((sum, item) => sum + item.views, 0)

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Action Buttons */}
      <CMSActions />

      {/* CMS Stats */}
      <CMSStats
        totalContent={totalContent}
        publishedContent={publishedContent}
        draftContent={draftContent}
        totalViews={totalViews}
      />

      {/* Content Management Table */}
      <ContentTable items={contentItems} />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  )
}