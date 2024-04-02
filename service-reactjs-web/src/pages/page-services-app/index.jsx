import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import Services from '@components/App/Services';
import About from '@components/App/About';
import Testimonials from '@components/App/Testimonials';
import Footer from '@components/App/Footer';

const PageServicesApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Services App</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="services-page style-5">
          <Services />
          <About noFirstContent noIntegration noWave />
          <Testimonials />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageServicesApp;