import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/Card'
import { Breadcrumb } from '@/components/AdminDashboard/Breadcrumb/Breadcrumb'
import { Button } from '@/components/UI/Button'
import { Save, Bell, Shield, Globe, Palette } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Settings Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Platform Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="Vendor Marketplace"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Platform Description
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                defaultValue="A comprehensive marketplace for vendors and customers"
              />
            </div>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">New Vendor Registration</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Product Approval Required</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Order Disputes</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">System Alerts</span>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Preferences
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Theme
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Color
              </label>
              <input
                type="color"
                className="w-full h-10 border border-gray-300 rounded-md"
                defaultValue="#3b82f6"
              />
            </div>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Apply Theme
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}