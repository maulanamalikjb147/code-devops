import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import Header from '@components/Style2/Header';
import About from '@components/Style2/About/About';
import Timeline from '@components/Style2/About/Timeline';
import Clients from '@components/Style2/About/Clients';
import Blog from '@components/Style2/About/Blog';
import Footer from '@components/Saas/Footer';

const PageAbout2 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - About 2</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <Header page="About Us" title="About Our Company" />
        <main className="about-page style-2">
          <About />
          <Timeline />
          <Clients />
          <Blog />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageAbout2;