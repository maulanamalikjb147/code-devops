import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import SideMenu from '@components/CloudHosting/SideMenu';
import Header from '@components/CloudHosting/Header';
import Domain from '@components/CloudHosting/Domain';
import About from '@components/CloudHosting/About';
import Services from '@components/CloudHosting/Services';
import Pricing from '@components/CloudHosting/Pricing';
import ChatBanner from '@components/CloudHosting/ChatBanner';
import ChooseUs from '@components/CloudHosting/ChooseUs';
import Testimonials from '@components/CloudHosting/Testimonials';
import Partners from '@components/CloudHosting/Partners';
import Footer from '@components/CloudHosting/Footer';

const HomeCloudHosting = () => {
  useEffect(() => {
    document.body.classList.add('home-style-9');
    return () => document.body.classList.remove('home-style-9');
  }, []);

  return (
    <>
      <Head>
        <title>Iteck - Cloud Hosting</title>
      </Head>

      <MainLayout>
        <SideMenu />
        <Header />
        <main>
          <Domain />
          <About />
          <Services />
          <Pricing />
          <ChatBanner />
          <ChooseUs />
          <Testimonials />
          <Partners />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeCloudHosting;