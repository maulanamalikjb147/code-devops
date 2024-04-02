import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav/OnePageNav';
import Header from '@components/Saas/Header';
import Community from '@components/Saas/Community';
import About from '@components/Saas/About';
import Clients from '@components/Saas/Clients';
import Features from '@components/Saas/Features';
import Pricing from '@components/Saas/Pricing';
import Testimonials from '@components/Saas/Testimonials';
import Download from '@components/Saas/Download';
import Footer from '@components/Saas/Footer';

const HomeSaasTechnologyOnePage = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Saas Technology One Page</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <Header />
        <main>
          <Community />
          <About />
          <Clients />
          <Features />
          <Pricing />
          <Testimonials />
          <Download />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeSaasTechnologyOnePage;