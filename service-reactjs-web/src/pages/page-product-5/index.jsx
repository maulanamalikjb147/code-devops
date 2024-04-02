import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import Product from '@components/Product';
import ProductDetails from '@components/ProductDetails';
import RelatedProducts from '@components/RelatedProducts';
import Footer from '@components/Saas/Footer';

const PageProduct5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Product 5</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} bgTransparent />
        <main className="product-page style-5">
          <Product style="5" />
          <ProductDetails style="5" />
          <RelatedProducts style="5" />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageProduct5;