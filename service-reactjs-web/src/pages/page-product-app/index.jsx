import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import Product from '@components/Product';
import ProductDetails from '@components/ProductDetails';
import RelatedProducts from '@components/RelatedProducts';
import Footer from '@components/App/Footer';

const PageProductApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Product App</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="product-page style-5">
          <Product />
          <ProductDetails />
          <RelatedProducts />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageProductApp;