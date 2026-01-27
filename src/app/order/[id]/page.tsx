'use client';

import { use } from 'react';
import OrderDetail from "@/components/WebSite/Order/OrderDetail";
import Header from "@/components/WebSite/Header/Header";
import Footer from "@/components/WebSite/Footer/Footer";

interface OrderDetailPageProps {
  params: Promise<{
    id: string
  }>
}

const OrderDetailPage = ({ params }: OrderDetailPageProps) => {
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <OrderDetail orderId={id} />
      <Footer />
    </div>
  );
};

export default OrderDetailPage;
