import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import Shop from '@components/Shop';
import Footer from '@components/Startup/Footer';

const RTLPageShop = () => {
  return (
    <>
      <Head>
        <title>Iteck - المتجر</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="shop-page style-5">
          <Shop style="5" rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageShop;