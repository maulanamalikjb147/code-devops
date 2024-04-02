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
import TabList from '@components/Style2/FAQ/TabList';
import TabsContent from '@components/Style2/FAQ/TabsContent';
import Footer from '@components/Saas/Footer';

const PageFAQ = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - FAQ</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <Header page="Faq" title="FAQ Page" />
        <main className="faq-page style-5 section-padding">
          <TabList />
          <TabsContent />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageFAQ;