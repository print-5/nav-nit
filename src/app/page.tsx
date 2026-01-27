import Header from '@/components/WebSite/Header/Header';
import Footer from '@/components/WebSite/Footer/Footer';
import HeroSection from '@/components/WebSite/HeroSection/HeroSection';
import Category from '@/components/WebSite/Category/Category';
import FeaturedProducts from '@/components/WebSite/Featured/Products';
import TopSelling from '@/components/WebSite/Featured/TopSelling';
import BestSeller from '@/components/WebSite/Featured/BestSeller';
import ValueSection from '@/components/WebSite/Footer/ValueSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <TopSelling />
      <BestSeller />
      <ValueSection />
      <Footer />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-4 py-8 m-8">
        <a href="/admin/dashboard" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Dashboard
        </a>
        <a href="/vendor/dashboard" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors">
          Vendor Dashboard
        </a>
        <a href="/vendor" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
          Vendor Registration
        </a>
        <a href="/checker" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
          Checker login
        </a>
      </div>
    </div>
  );
}