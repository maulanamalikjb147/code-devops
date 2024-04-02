import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import Product from '@components/Product';
import ProductDetails from '@components/ProductDetails';
import RelatedProducts from '@components/RelatedProducts';
import Footer from '@components/Startup/Footer';

const RTLPageProduct = () => {
  return (
    <>
      <Head>
        <title>Iteck - المنتج</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="product-page style-5">
          <Product rtl style="5" />
          <ProductDetails rtl style="5" />
          <RelatedProducts rtl style="5" />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageProduct;