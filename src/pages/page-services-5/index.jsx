import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import Features from '@components/Saas/Features';
import Services from '@components/Saas/Services';
import About from '@components/Saas/About';
import Testimonials from '@components/Saas/Testimonials';
import Pricing from '@components/Saas/Pricing';
import Footer from '@components/Saas/Footer';

const PageServices5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Services 5</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <main className="services-page style-5">
          <Features isServices />
          <Services />
          <About noPaddingTop />
          <Testimonials />
          <Pricing />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageServices5;