import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/Startup/Header';
import About from '@components/Startup/About';
import Services from '@components/Startup/Services';
import Project from '@components/Startup/Project';
import ChooseUs from '@components/Startup/ChooseUs';
import Testimonials from '@components/Startup/Testimonials';
import Clients from '@components/Startup/Clients';
import Numbers from '@components/Startup/Numbers';
import Team from '@components/Startup/Team';
import Blog from '@components/Startup/Blog';
import Contact from '@components/Startup/Contact';
import Footer from '@components/Startup/Footer';

const RTLHomeMarketingStartupOnePage = () => {
  return (
    <>
      <Head>
        <title>Iteck - التسويق الالكترونى صفحة واحدة</title>
      </Head>

      <MainLayout isRTL>
        <Header rtl isOnePage />
        <main>
          <About rtl />
          <Services rtl />
          <Project rtl />
          <ChooseUs rtl />
          <Testimonials rtl />
          <Clients rtl />
          <Numbers rtl />
          <Team rtl />
          <Blog rtl />
          <Contact rtl />
        </main>
        <Footer rtl />
      </MainLayout>
    </>
  )
}

export default RTLHomeMarketingStartupOnePage;