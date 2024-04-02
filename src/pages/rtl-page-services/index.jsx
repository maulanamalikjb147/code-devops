import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarRTL from '@components/Navbars/StartupNav/RTLNav';
import Features from '@components/Saas/Features';
import Services from '@components/Saas/Services';
import About from '@components/Saas/About';
import Testimonials from '@components/Saas/Testimonials';
import Pricing from '@components/Saas/Pricing';
import Footer from '@components/Startup/Footer';

const RTLPageServices = () => {
  return (
    <>
      <Head>
        <title>Iteck - الخدمات</title>
      </Head>

      <MainLayout isRTL>
        <NavbarRTL whiteNotRounded />
        <main className="services-page style-5">
          <Features rtl isServices />
          <Services rtl />
          <About rtl noPaddingTop />
          <Testimonials rtl />
          <Pricing rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLPageServices;