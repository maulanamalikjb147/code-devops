import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/AppNav';
import About from '@components/App/About2';
import Team from '@components/App/Team';
import Culture from '@components/App/Culture';
import Footer from '@components/App/Footer';

const PageAboutApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - About App</title>
      </Head>

      <MainLayout>
        <TopNav style="4" />
        <Navbar navbarRef={navbarRef} />
        <main className="about-page style-5">
          <About />
          <Team />
          <Culture />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageAboutApp;