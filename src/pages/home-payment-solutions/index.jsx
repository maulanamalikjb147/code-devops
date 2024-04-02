import React, { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/PaymentSolutionsNav';
import Header from '@components/PaymentSolutions/Header';
import Clients from '@components/PaymentSolutions/Clients';
import Features from '@components/PaymentSolutions/Features';
import ChooseUs from '@components/PaymentSolutions/ChooseUs';
import Screenshots from '@components/PaymentSolutions/Screenshots';
import Numbers from '@components/PaymentSolutions/Numbers';
import About from '@components/PaymentSolutions/About';
import Contact from '@components/PaymentSolutions/Contact';
import Testimonials from '@components/PaymentSolutions/Testimonials';
import Blog from '@components/PaymentSolutions/Blog';
import Footer from '@components/PaymentSolutions/Footer';

const HomePaymentSolutions = () => {
  useEffect(() => {
    document.body.classList.add('home-style-14');
    return () => document.body.classList.remove('home-style-14');
  }, []);

  return (
    <>
      <Head>
        <title>Iteck - Payment Solutions</title>
      </Head>

      <MainLayout>
        <Navbar />
        <Header />
        <main>
          <Clients />
          <Features />
          <ChooseUs />
          <Screenshots />
          <Numbers />
          <About />
          <Contact />
          <Testimonials />
          <Blog />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomePaymentSolutions;