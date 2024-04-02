import { useEffect, useRef } from 'react';
import Head from 'next/head';
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/TopNav';
import Navbar from '@components/Navbars/SaasNav';
import About from '@components/SingleProject/About';
import Challenge from '@components/SingleProject/Challenge';
import Screenshots from '@components/App/Screenshots';
import About2 from '@components/SingleProject/About2';
import Projects from '@components/SingleProject/Projects';
import Footer from '@components/Saas/Footer';

const PageSingleProject5 = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current, true);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <title>Iteck - Single Project 5</title>
      </Head>

      <MainLayout>
        <TopNav style="5" />
        <Navbar navbarRef={navbarRef} />
        <main className="single-project pt-50 style-5">
          <About style="5" />
          <Challenge style="5" />
          <Screenshots />
          <About2 style="5" />
          <Projects style="5" />
        </main>
        <Footer noWave />
      </MainLayout>
    </>
  )
}

export default PageSingleProject5;