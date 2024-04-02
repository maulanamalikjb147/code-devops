import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav/OnePageNav';
import Header from '@components/App/Header';
import Clients from '@components/App/Clients';
import Features from '@components/App/Features';
import About from '@components/App/About';
import Screenshots from '@components/App/Screenshots';
import Testimonials from '@components/App/Testimonials';
import Pricing from '@components/App/Pricing';
import FAQ from '@components/App/FAQ';
import Community from '@components/App/Community';
import Footer from '@components/App/Footer';

const HomeAppLandingOnePage = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - تطبيق الهبوط صفحة واحدة</title>
      </Head>

      <MainLayout isRTL>
        <TopNav style="4" rtl />
        <Navbar navbarRef={navbarRef} rtl />
        <Header rtl />
        <main>
          <Clients rtl />
          <Features rtl />
          <About rtl />
          <Screenshots />
          <Testimonials rtl/>
          <Pricing rtl />
          <FAQ rtl />
          <Community rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default HomeAppLandingOnePage;