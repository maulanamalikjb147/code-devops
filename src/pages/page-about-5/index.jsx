import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import AboutHeader from '@components/Saas/AboutHeader';
import Community from '@components/Saas/Community';
import Philosophy from '@components/Saas/Philosophy';
import ChooseUs from '@components/Saas/ChooseUs';
import Clients from '@components/Saas/Clients';
import Numbers from '@components/Saas/Numbers';
import Culture from '@components/Saas/Culture';
import Team from '@components/Saas/Team';
import Contact from '@components/Saas/Contact';
import Footer from '@components/Saas/Footer';

const PageAbout5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - About 5</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <main className="about-page style-5">
          <AboutHeader />
          <Community />
          <Philosophy />
          <ChooseUs />
          <Clients padding />
          <Numbers />
          <Culture />
          <Team />
          <Contact />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageAbout5;