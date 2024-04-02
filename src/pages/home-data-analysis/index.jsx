import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/DataAnalysis/Header';
import Services from '@components/DataAnalysis/Services';
import About from '@components/DataAnalysis/About';
import Numbers from '@components/DataAnalysis/Numbers';
import Projects from '@components/DataAnalysis/Projects';
import ChooseUs from '@components/DataAnalysis/ChooseUs';
import Testimonials from '@components/DataAnalysis/Testimonials';
import Pricing from '@components/DataAnalysis/Pricing';
import Blog from '@components/DataAnalysis/Blog';
import Footer from '@components/DataAnalysis/Footer';

const HomeDataAnalysis = () => {
  useEffect(() => {
    document.body.classList.add('home-style-8');
    return () => document.body.classList.remove('home-style-8');
  }, []);

  return (
    <>
      <Head>
        <title>Iteck - Data Analysis</title>
      </Head>

      <MainLayout>
        <Header />
        <main>
          <Services />
          <About />
          <Numbers />
          <Projects />
          <ChooseUs />
          <Testimonials />
          <Pricing />
          <Blog />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeDataAnalysis;